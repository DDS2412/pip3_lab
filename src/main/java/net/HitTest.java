package net;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import java.util.LinkedList;
import java.util.Objects;

@ManagedBean
@ApplicationScoped
public class HitTest {
    private EntityManagerHandler entityManagerHandler;

    private LinkedList<Point> points = new LinkedList<>();
    private double x;
    private double y;
    private double r = 1.0;
    private boolean isCheck;

    public void setR(double r) {
        this.r = r;
    }

    public void setX(double x) {
        this.x =  x;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r*10;
    }

    public double getX() {
        return x;
    }

    public double getY() {
        return y;
    }

    public boolean getIsCheck(){
        return isCheck;
    }

    public void setIsCheck(){
        isCheck = x<=0 && y<=0 && x*x+y*y<=r*r ||
               x>=0 && y>=0 && y<=(-1*x+0.5*r) ||
               x>=0 && y<=0 && x<=r && y >= -r/2;
    }

    public void newPoint(){
        setIsCheck();

        Point p = new Point();
        p.setR(getR());
        p.setX((double)Math.round(getX() * 10000) / 10000);
        p.setY((double)Math.round(getY() * 10000) / 10000);
        p.setisCheck((getIsCheck()));
        setPoint(p);
        try{
            entityManagerHandler.getEntityManager().getTransaction().begin();
            entityManagerHandler.getEntityManager().persist(p);
            entityManagerHandler.getEntityManager().getTransaction().commit();
        }
        catch (Exception e){}
    }

    private void setPoint(Point p){
        if(points.size() > 0 && !Objects.equals(p.getR(), points.getFirst().getR())) {
            points.clear();
        }
        points.add(p);
        if(points.size() > 5)
            points.removeFirst();
    }

    public LinkedList<Point> getPoints(){ return points; }
}
