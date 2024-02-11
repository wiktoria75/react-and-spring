package com.app.app.user.service;

import com.app.app.user.model.StudentDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AppUserService {
    List<StudentDto> getAllStudents();
}
