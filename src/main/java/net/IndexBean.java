package net;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import java.io.Serializable;

@ManagedBean
@ApplicationScoped
public class IndexBean implements Serializable {
    private String title = "Index";

    public String getTitle() {
        return title;
    }

    public void setTitle(String value){title = value;}


}

