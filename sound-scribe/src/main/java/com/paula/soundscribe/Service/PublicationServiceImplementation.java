package com.paula.soundscribe.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paula.soundscribe.model.Publication;
import com.paula.soundscribe.model.User;
import com.paula.soundscribe.repository.PublicationRepository;

@Service
public class PublicationServiceImplementation implements PublicationService {

    @Autowired
    private PublicationRepository publicationRepository;

    @Override
    public Publication createPublication(Publication publication, User user) {
        Publication createdPublication = new Publication();
        createdPublication.setTitle(publication.getTitle());
        createdPublication.setImage(publication.getImage());
        createdPublication.setDescription(publication.getDescription());
        createdPublication.setUser(user);
        createdPublication.setCratedAt(LocalDateTime.now());

        return publicationRepository.save(createdPublication);
    }

    @Override
    public Publication findPublicationById(Long id) throws Exception {
        Optional<Publication> opt = publicationRepository.findById(id);

        if(opt.isPresent()){
            return opt.get();
        }
        throw new Exception("Publication not found by with yhe ID: " + id);
    }

    @Override
    public void deletePublication(Long id) throws Exception {
        findPublicationById(id);

        publicationRepository.deleteById(id);
    }

    @Override
    public Publication updatePublication(Publication publication, Long id) throws Exception {
        Publication oldPublication = findPublicationById(id);

        if(publication.getTitle() != null) {
            oldPublication.setTitle(publication.getTitle());
        }
        if (publication.getImage() != null) {
            oldPublication.setImage(publication.getImage());
        }
        if (publication.getDescription()!= null) {
            oldPublication.setDescription(publication.getDescription());
        }
        
        return publicationRepository.save(oldPublication);
    }

    @Override
    public List<Publication> findAllPublications() throws Exception {
        return publicationRepository.findAll();
    }

    @Override
    public Publication publicationLikes(Long publicationId, User user) throws Exception {
        Publication publication = findPublicationById(publicationId);

        if(publication.getLikes().contains(user.getId())){
            publication.getLikes().remove(user.getId());
        }
        else{
            publication.getLikes().add(user.getId());
        }
        return publicationRepository.save(publication);
    }

}
