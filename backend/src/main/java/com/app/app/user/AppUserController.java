package com.app.app.user;

import com.app.app.user.model.RegisteredUserDto;
import com.app.app.user.service.AppUserService;
import jakarta.validation.ConstraintViolationException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000/register")
public class AppUserController {

    private final AppUserService appUserService;

    public AppUserController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @PostMapping(value = "/register")
    public ResponseEntity<Object> addUser(@RequestBody RegisteredUserDto userDTO) {
        try {
            appUserService.registerUser(userDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body("User created successfully");
        } catch (ConstraintViolationException ex) {
            return ResponseEntity.badRequest().body("Invalid user data");
        } catch (DataIntegrityViolationException ex) {
            return ResponseEntity.badRequest().body("Email is already in use");
        }
    }
}
