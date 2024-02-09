package com.app.app.user.model;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class RegisteredUserDto {

    @NotNull
    @Size(min = 8, max = 16)
    private String password;
    @NotNull
    @Size(min = 3, max = 40)
    private String name;

    @NotNull
    @Email
    @Size(min = 3, max = 40)
    private String email;
}