package com.paula.soundscribe.service;

import com.paula.soundscribe.model.User;

public interface UserService {

    public User findUserById(Long userId) throws Exception;

}
