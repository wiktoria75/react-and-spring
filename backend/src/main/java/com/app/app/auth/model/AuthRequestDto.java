package com.app.app.auth.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class AuthRequestDto {
    @NotNull
    @Size(min = 8, max = 16)
    private String password;

    @NotNull
    @Email
    @Size(min = 3, max = 40)
    private String email;
}
