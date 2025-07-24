package com.example.crochet_app.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
public class ProjectDetails {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    private String description;
    private String yarn;
    private double hook;

//    @Column(name = "time_spent")
    private double timeSpent; // number of hours

    @OneToOne(mappedBy = "details")
    @JsonIgnore
    private Project project;

    public ProjectDetails() {}

    public ProjectDetails(String description, double timeSpent, String yarn, double hook) {
        this.description = description;
        this.timeSpent = timeSpent;
        this.yarn = yarn;
        this.hook = hook;
    }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public double getTimeSpent() { return timeSpent; }
    public void setTimeSpent(double timeSpent) { this.timeSpent = timeSpent; }
    public String getYarn() { return yarn; }
    public void setYarn(String yarn) { this.yarn = yarn; }
    public double getHook() { return hook; }
    public void setHook(double hook) { this.hook = hook; }
}
