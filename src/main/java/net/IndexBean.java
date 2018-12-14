package net;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;

@ManagedBean
@ApplicationScoped
public class IndexBean implements Serializable {
    private String title = "Index";

    public String getTitle() {
        return title;
    }

    public void setTitle(String value){title = value;}


    public String getTime() {
        SimpleDateFormat formatForDateNow = new SimpleDateFormat("yyyy-MM-dd-hh-mm-ss");
        Date now = new Date();
        return formatForDateNow.format(now);
    }
}

