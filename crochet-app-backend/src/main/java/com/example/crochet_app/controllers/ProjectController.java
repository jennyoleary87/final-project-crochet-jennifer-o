package com.example.crochet_app.controllers;

import com.example.crochet_app.models.Project;
import com.example.crochet_app.models.User;
import com.example.crochet_app.models.dto.ProjectDTO;
import com.example.crochet_app.repositories.ProjectRepository;
import com.example.crochet_app.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
// what does @RestController do? - combines @Controller and @ResponseBody - handling HTTP requests and returning JSON responses
@RestController
@RequestMapping("/api/projects")
public class ProjectController {
// what does @Autowired do? - used for automatic dependency injection - Spring locates bean of corresponding type
    @Autowired
    ProjectRepository projectRepository;

    @Autowired
    UserRepository userRepository;

    // What does @GetMapping do? - handles incoming HTTP GET requests for specified path
    // ("") get/view full list of projects
    // Endpoint is http://localhost:8080/api/projects
    @GetMapping("")
    // what does ResponseEntity<> do? - wraps response data with HTTP status and headers - <?> allows any return type
    public ResponseEntity<?> getAllProjects() {
        List<Project> allProjects = projectRepository.findAll();
        return new ResponseEntity<>(allProjects, HttpStatus.OK);
    }

    // ("{id}") get/view a specific project by id
    // Endpoint is http://localhost:8080/api/projects/{id}
    @GetMapping(value="/details/{projectId}", produces=MediaType.APPLICATION_JSON_VALUE)
    // what does @PathVariable do? - extracts values from URL path and maps them to method parameters
    public ResponseEntity<?> getProjectById(@PathVariable(value="projectId") int projectId) {
        Project currentProject = projectRepository.findById(projectId).orElse(null);
        if (currentProject != null) {
            return new ResponseEntity<>(currentProject, HttpStatus.OK);
        } else {
            String response = "Project with ID " + projectId + " not found.";
            return new ResponseEntity<>(Collections.singletonMap("message", response), HttpStatus.NOT_FOUND);
        }
    }

    // ("/add") post/create a new project
    // Endpoint is http://localhost:8080/api/projects/add
    @PostMapping(value="/add", consumes=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createProject(@RequestBody ProjectDTO projectData) {
        User user = userRepository.findById(projectData.getUserId()).orElse(null);
        if (user == null) {
            return new ResponseEntity<>(Collections.singletonMap("message", "User not found."), HttpStatus.BAD_REQUEST);
        }
        Project newProject = new Project(projectData.getName(), user, projectData.getDetails());
        projectRepository.save(newProject);
        return new ResponseEntity<>(newProject, HttpStatus.CREATED);
    }

    // ("/update/{projectId}") update an existing project
    // Endpoint is http://localhost:8080/api/projects/update/{projectId}




    // ("/delete/{projectId}") delete a project by id
    // Endpoint is http://localhost:8080/api/projects/delete/{projectId}
    @DeleteMapping(value="/delete/{projectId}", produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> deleteProject(@PathVariable(value="projectId") int projectId) {
        Project currentProject = projectRepository.findById(projectId).orElse(null);
        if (currentProject != null) {
            projectRepository.deleteById(projectId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            String response = "Project with ID of " + projectId + " not found.";
            return new ResponseEntity<>(Collections.singletonMap("response", response), HttpStatus.NOT_FOUND); // 404
        }
    }
}