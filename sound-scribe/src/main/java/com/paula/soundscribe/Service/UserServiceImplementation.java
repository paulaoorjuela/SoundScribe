package com.paula.soundscribe.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paula.soundscribe.config.JwtProvider;
import com.paula.soundscribe.model.User;
import com.paula.soundscribe.repository.UserRepository;

@Service
public class UserServiceImplementation implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtProvider jwtProvider;

    @Override
    public User findUserById(Long userId) throws Exception {
        Optional <User> opt = userRepository.findById(userId);

        if(opt.isPresent()){
            return opt.get();
        }
        throw new Exception("User not found with id " + userId);
    }

    @Override
    public User findUserByJwt(String jwt) throws Exception {

        String email = jwtProvider.getEmailFromJwtToken(jwt);

        if(email == null){
            throw new Exception("Provide a valid JWT");
        }

        User user = userRepository.findByEmail(email);

        if(user == null){
            throw new Exception("User not found with the email: "+ email) ;
        }
        
        return user;
    }



}
