package com.example.crochet_app.controllers;

import com.example.crochet_app.models.User;
import com.example.crochet_app.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
}
