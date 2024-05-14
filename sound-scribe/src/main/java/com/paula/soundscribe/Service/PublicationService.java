package com.paula.soundscribe.service;

import java.util.List;

import com.paula.soundscribe.model.Publication;
import com.paula.soundscribe.model.User;

public interface PublicationService {

    public Publication createPublication(Publication publication, User user);
    
    public Publication findPublicationById(Long id) throws Exception;

    public void deletePublication(Long id) throws Exception;

    public Publication updatePublication(Publication publication, Long id) throws Exception;

    public List<Publication> findAllPublications() throws Exception;

    public Publication publicationLikes(Long publicationId, User user) throws Exception;

}
