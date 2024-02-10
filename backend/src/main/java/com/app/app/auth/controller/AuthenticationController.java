package com.app.app.auth.controller;


import com.app.app.auth.model.AuthRequestDto;
import com.app.app.auth.model.AuthResponseDto;
import com.app.app.auth.model.RegisterRequestDto;
import com.app.app.auth.service.AuthService;
import jakarta.validation.ConstraintViolationException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthenticationController {

    private final AuthService authService;

   @PostMapping(value = "/register")
    public ResponseEntity<Object> addUser(@RequestBody RegisterRequestDto userDTO) {
        try {
            authService.register(userDTO);
            return ResponseEntity.status(HttpStatus.CREATED).body("User created successfully");
        } catch (ConstraintViolationException ex) {
            return ResponseEntity.badRequest().body("Invalid user data");
        } catch (DataIntegrityViolationException ex) {
            return ResponseEntity.badRequest().body("Email is already in use");
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<Object> authenticate(@Valid @RequestBody AuthRequestDto request) {
       try {
           AuthResponseDto response = authService.authenticate(request);
           return new ResponseEntity<>(response, HttpStatus.OK);
       } catch (UsernameNotFoundException e) {
           return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
       }
    }
}
