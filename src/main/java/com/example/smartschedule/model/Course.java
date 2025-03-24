package com.example.smartschedule.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;



@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;

    public Object getDescription() {
        return null;
    }

    public Object getName() {
        return null;
    }

    public Object getId() {
        return null;
    }

    public void setName(Object name) {
    }

    public void setDescription(Object description) {
    }

    // Getters and setters (or use Lombok annotations like @Data)
}
