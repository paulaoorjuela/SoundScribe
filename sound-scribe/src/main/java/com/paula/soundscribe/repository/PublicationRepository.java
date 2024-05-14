package com.paula.soundscribe.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.paula.soundscribe.model.Publication;

public interface PublicationRepository extends JpaRepository <Publication, Long> {

}
