package com.example.crochet_app.repositories;

import com.example.crochet_app.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {
}
