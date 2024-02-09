package com.app.app.user.service;

import com.app.app.user.model.RegisteredUserDto;
import org.springframework.stereotype.Service;

@Service
public interface AppUserService {
    void registerUser(RegisteredUserDto userDTO);
}
