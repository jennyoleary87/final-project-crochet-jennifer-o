package com.example.crochet_app.models;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

// project_id, FOREIGN user_id, name, description, FOREIGN pattern_id, timeSpent, yarn_info, hook_size, created_at, updated_at

@Entity
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int project_id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "time_spent", nullable = false)
    private LocalDate timeSpent;

    @Column(name = "yarn_info", nullable = false)
    private String yarnInfo;

    @Column(name = "hook_size", nullable = false)
    private String hookSize;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "pattern_id", nullable = false)
    private Pattern pattern;

    public Project() {}

    public Project(String name, String description, LocalDate timeSpent, String yarnInfo, String hookSize, LocalDateTime createdAt, LocalDateTime updatedAt, User user, Pattern pattern) {
        this.name = name;
        this.description = description;
        this.timeSpent = timeSpent;
        this.yarnInfo = yarnInfo;
        this.hookSize = hookSize;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.user = user;
        this.pattern = pattern;
    }

    public int getProjectId() { return project_id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public LocalDate getTimeSpent() { return timeSpent; }
    public void setTimeSpent(LocalDate timeSpent) { this.timeSpent = timeSpent; }
    public String getYarnInfo() { return yarnInfo; }
    public void setYarnInfo(String yarnInfo) { this.yarnInfo = yarnInfo; }
    public String getHookSize() { return hookSize; }
    public void setHookSize(String hookSize) { this.hookSize = hookSize; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
    public Pattern getPattern() { return pattern; }
    public void setPattern(Pattern pattern) { this.pattern = pattern; }

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
        return name + " ( " + description + " )" ;
    }

}