package com.app.app.user.service;

import com.app.app.user.model.AppUser;
import com.app.app.user.model.RegisteredUserDto;
import org.springframework.stereotype.Service;

@Service
public class AppUserMapperImpl implements AppUserMapper{
    @Override
    public AppUser createUser(RegisteredUserDto userDTO) {
        return AppUser.builder()
                .email(userDTO.getEmail())
                .name(userDTO.getName())
                .password(userDTO.getPassword())
                .build();
    }
}
