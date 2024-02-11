package com.app.app.user.service;

import com.app.app.user.model.StudentDto;
import com.app.app.user.repository.AppUserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppUserServiceImpl implements AppUserService {

    private final AppUserRepository appUserRepository;

    public AppUserServiceImpl(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;
    }
    @Override
    public List<StudentDto> getAllStudents() {
        return appUserRepository.findAllStudentsWithBookCount();
    }
}
