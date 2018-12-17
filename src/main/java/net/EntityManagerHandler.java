package net;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class EntityManagerHandler {
    private EntityManager entityManager;

    public EntityManagerHandler() {
        EntityManagerFactory hitUnit = Persistence.createEntityManagerFactory("pointUnit");
        entityManager = hitUnit.createEntityManager();
    }

    public EntityManager getEntityManager() {
        return entityManager;
    }

    public void setEntityManager(EntityManager entityManager) {
        this.entityManager = entityManager;
    }
}