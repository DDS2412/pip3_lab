package net;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import java.io.Serializable;

@ManagedBean
@ApplicationScoped
public class MainBean implements Serializable {
    private String title = "Main page";

    public String getTitle() {
        return title;
    }

    public void setTitle(String value){title = value;}
}
