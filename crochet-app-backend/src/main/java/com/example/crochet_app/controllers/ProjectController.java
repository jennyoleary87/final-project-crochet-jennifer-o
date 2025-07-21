package com.example.crochet_app.controllers;

import com.example.crochet_app.models.Project;
import com.example.crochet_app.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final ProjectRepository projectRepository;

    @Autowired // initialize constructor
    public ProjectController(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @GetMapping("") // get full list of projects
    public ResponseEntity<?> getAllProjects() {
        List<Project> allProjects = projectRepository.findAll();
        return new ResponseEntity<>(allProjects, HttpStatus.OK);
    }



}