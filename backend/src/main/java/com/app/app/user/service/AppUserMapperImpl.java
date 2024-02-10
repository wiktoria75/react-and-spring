package com.app.app.user.service;

import com.app.app.user.model.AppUser;
import com.app.app.auth.model.RegisterRequestDto;
import com.app.app.user.model.Role;
import org.springframework.stereotype.Service;

@Service
public class AppUserMapperImpl implements AppUserMapper{
    @Override
    public AppUser createUser(RegisterRequestDto userDTO) {
        return AppUser.builder()
                .email(userDTO.getEmail())
                .name(userDTO.getName())
                .password(userDTO.getPassword())
                .role(Role.USER)
                .build();
    }
}
