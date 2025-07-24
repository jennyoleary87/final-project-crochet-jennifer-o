package com.example.crochet_app.controllers;

import com.example.crochet_app.models.User;
import com.example.crochet_app.models.dto.UserDTO;
import com.example.crochet_app.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserRepository userRepository;

    // ("") get/view full list of users
    // Endpoint is http://localhost:8080/api/users
    @GetMapping("")
    public ResponseEntity<?> getAllUsers() {
        List<User> allUsers = userRepository.findAll();
        return new ResponseEntity<>(allUsers, HttpStatus.OK);
    }

    // ("/details/{userId}") get/view a specific user by ID
    // Endpoint is http://localhost:8080/api/users/details/{userId}
    @GetMapping(value="/details/{userId}", produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getUserById(@PathVariable(value="userId") int userId) {
        User currentUser = userRepository.findById(userId).orElse(null);
        if (currentUser != null) {
            return new ResponseEntity<>(currentUser, HttpStatus.OK);
        } else {
            String response = "User with ID of " + userId + " not found.";
            return new ResponseEntity<>(Collections.singletonMap("response", response), HttpStatus.NOT_FOUND);
        }
    }

    // ("/add") post/create a new user
    // Endpoint is http://localhost:8080/api/users/add
    @PostMapping(value="/add", consumes=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> createUser(@RequestBody UserDTO userData) {
        User newUser = new User(userData.getUsername(), userData.getEmail(), userData.getPassword());
        userRepository.save(newUser);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    // ("/update/{userId}") put/update an existing user
    // Endpoint is http://localhost:8080/api/users/update/{userId}




    // ("/delete/{userId}") delete a user by ID
    // Endpoint is http://localhost:8080/api/users/delete/{userId}
    @DeleteMapping(value="/delete/{userId}", produces=MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> deleteUser(@PathVariable(value="userId") int userId) {
        User currentUser = userRepository.findById(userId).orElse(null);
        if (currentUser != null) {
            userRepository.deleteById(userId);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            String response = "User with ID of " + userId + " not found.";
            return new ResponseEntity<>(Collections.singletonMap("response", response), HttpStatus.NOT_FOUND);
        }
    }
}
