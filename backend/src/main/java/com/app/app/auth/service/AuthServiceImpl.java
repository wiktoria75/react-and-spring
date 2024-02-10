package com.app.app.auth.service;

import com.app.app.auth.config.JwtService;
import com.app.app.auth.model.AuthRequestDto;
import com.app.app.auth.model.AuthResponseDto;
import com.app.app.auth.model.RegisterRequestDto;
import com.app.app.user.AppUserRepository;
import com.app.app.user.model.AppUser;
import com.app.app.user.service.AppUserMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AuthServiceImpl implements AuthService {

    private final AppUserRepository appUserRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final AppUserMapper appUserMapper;

    public AuthServiceImpl(AppUserRepository appUserRepository, PasswordEncoder passwordEncoder, JwtService jwtService, AuthenticationManager authenticationManager, AppUserMapper appUserMapper) {
        this.appUserRepository = appUserRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.authenticationManager = authenticationManager;
        this.appUserMapper = appUserMapper;
    }

    @Transactional
    public void register(RegisterRequestDto request) {
        request.setPassword(passwordEncoder.encode(request.getPassword()));
        AppUser appUser = appUserMapper.createUser(request);
        appUserRepository.save(appUser);
    }

    public AuthResponseDto authenticate(AuthRequestDto request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        AppUser user = appUserRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        var jwtToken = jwtService.generateToken(user);

        return AuthResponseDto.builder()
                .token(jwtToken)
                .id(String.valueOf(user.getId()))
                .name(user.getName())
                .email(user.getEmail())
                .role(user.getRole().toString())
                .build();
    }
}
