package net;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import java.io.Serializable;

@ManagedBean(name = "navigationController", eager = true)
@ApplicationScoped
public class NavigationController implements Serializable {
    private String pageId = "index";

    public String moveToMainPage(){
        return "mainpage";
    }

    public String moveToIndexPage(){
        return "index";
    }

    public void setPageId(String pageId) {
        this.pageId = pageId;
    }

    public String getPageId() {
        return pageId;
    }
}
