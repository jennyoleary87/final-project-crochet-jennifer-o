package com.example.crochet_app.models.dto;

import com.example.crochet_app.models.ProjectDetails;

public class ProjectDTO {

    private String name;
    private int userId;
    private ProjectDetails details;

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public int getUserId() {
        return userId;
    }
    public void setUserId(int userId) {
        this.userId = userId;
    }

    public ProjectDetails getDetails() {
        return details;
    }

    public void setDetails(ProjectDetails details) {
        this.details = details;
    }
}
