package com.paula.soundscribe.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/")
    public String homeController() {
        return "Welcome to SoundScribe!";
    }

    // @PostMapping
    // @PutMapping
    // @DeleteMapping
}
