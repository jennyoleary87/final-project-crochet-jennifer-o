package com.example.crochet_app.models;

import jakarta.persistence.*;

@Entity
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int project_id;

    private String name;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToOne(mappedBy = "project", cascade = CascadeType.ALL)
    private ProjectDetails projectDetails;

    public Project() {}

    public Project(String name, User user, ProjectDetails projectDetails) {
        this.name = name;
        this.user = user;
        this.projectDetails = projectDetails;
    }

    public int getProjectId() { return project_id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
    public ProjectDetails getDetails() { return projectDetails; }
    public void setDetails(ProjectDetails projectDetails) { this.projectDetails = projectDetails; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Project project = (Project) o;
        return project_id == project.project_id;
    }

    @Override
    public int hashCode() {
        return Integer.hashCode(project_id);
    }

    @Override
    public String toString() {
        return name;
    }

}