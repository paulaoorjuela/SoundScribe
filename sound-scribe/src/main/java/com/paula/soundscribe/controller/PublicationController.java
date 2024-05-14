package com.paula.soundscribe.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paula.soundscribe.model.Publication;
import com.paula.soundscribe.model.User;
import com.paula.soundscribe.service.PublicationService;
import com.paula.soundscribe.service.UserService;

@RestController
@RequestMapping("api/publications")
public class PublicationController {

    @Autowired
    private PublicationService publicationService;

    @Autowired
    private UserService userService;

    @PostMapping("/user/{userId}")
    public Publication createPublication(@RequestBody Publication publication, @PathVariable Long userId)
            throws Exception {
        User user = userService.findUserById(userId);
        Publication createdPublication = publicationService.createPublication(publication, user);
        return createdPublication;
    }

    @PutMapping("/{id}")
    public Publication updatePublication(@RequestBody Publication publication, @PathVariable Long id) throws Exception {
        Publication updatedPublication = publicationService.updatePublication(publication, id);
        return updatedPublication;
    }

    @GetMapping()
    public List<Publication> getAllPublications() throws Exception {

        List<Publication> Publications = publicationService.findAllPublications();
        return Publications;
    }

    @DeleteMapping("/{publicationId}")
    public String deletePublication(@PathVariable Long publicationId) throws Exception {

        publicationService.deletePublication(publicationId);
        return "Publication deleted";
    }

    @PutMapping("/{id}/like/user/{userId}")
    public Publication likePublication(@PathVariable Long userId, @PathVariable Long id) throws Exception {
        User user = userService.findUserById(userId);

        Publication updatedPublication = publicationService.publicationLikes(id, user);
        return updatedPublication;
    }
}
