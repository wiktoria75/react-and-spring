package com.app.app.auth.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class AuthResponseDto {
    private String token;
    private String id;
    private String name;
    private String email;
    private String role;
}

