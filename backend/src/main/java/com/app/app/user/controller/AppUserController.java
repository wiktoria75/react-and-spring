package com.app.app.user.controller;

import com.app.app.user.model.StudentDto;
import com.app.app.user.service.AppUserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AppUserController {

    private final AppUserService appUserService;

    public AppUserController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @GetMapping("/students")
    public ResponseEntity<List<StudentDto>> getUnfinishedBooks() {
        return ResponseEntity.ok().body(appUserService.getAllStudents());
    }
}