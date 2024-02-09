package com.app.app.user.service;

import com.app.app.user.AppUserRepository;
import com.app.app.user.model.AppUser;
import com.app.app.user.model.RegisteredUserDto;
import org.springframework.stereotype.Service;

@Service
public class AppUserServiceImpl implements AppUserService {

    private final AppUserRepository appUserRepository;
    private final AppUserMapper appUserMapper;

    public AppUserServiceImpl(AppUserRepository appUserRepository, AppUserMapper appUserMapper) {
        this.appUserRepository = appUserRepository;
        this.appUserMapper = appUserMapper;
    }

    @Override
    public void registerUser(RegisteredUserDto userDTO) {
        AppUser appUser = appUserMapper.createUser(userDTO);
        appUserRepository.save(appUser);
    }
}
