package com.paula.soundscribe.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paula.soundscribe.model.User;

public interface UserRepository extends JpaRepository <User, Long>{

    public User findByEmail(String email);

}
