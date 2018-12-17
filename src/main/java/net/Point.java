package net;

import javax.persistence.GeneratedValue;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Point implements Cloneable{
    @Id
    @GeneratedValue
    private long id;

    private Double r;

    private Double x;

    private Double y;

    private Boolean isCheck;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Double getR() {
        return r;
    }

    public void setR(Double r) {
        this.r = r;
    }

    public Double getX() {
        return x;
    }

    public void setX(Double x) {
        this.x = x;
    }

    public Double getY() {
        return y;
    }

    public void setY(Double y) {
        this.y = y;
    }

    public Boolean getisCheck() {
        return isCheck;
    }

    public void setisCheck(Boolean isCheck) {
        this.isCheck = isCheck;
    }
}
