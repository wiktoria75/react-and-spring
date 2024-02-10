package com.app.app.auth.service;

import com.app.app.auth.model.AuthRequestDto;
import com.app.app.auth.model.AuthResponseDto;
import com.app.app.auth.model.RegisterRequestDto;

public interface AuthService {

    void register(RegisterRequestDto request);

    AuthResponseDto authenticate(AuthRequestDto request);
}
