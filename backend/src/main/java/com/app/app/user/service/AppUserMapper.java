package com.app.app.user.service;

import com.app.app.user.model.AppUser;
import com.app.app.user.model.RegisteredUserDto;
import org.springframework.stereotype.Service;

@Service
public interface AppUserMapper {
    AppUser createUser(RegisteredUserDto userDTO);
}
