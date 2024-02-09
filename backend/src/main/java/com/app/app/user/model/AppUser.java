package com.app.app.user.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.UUID;

@Entity
@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AppUser {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @NotNull
    @Size(min = 8, max = 16)
    private String password;
    @NotNull
    @Size(min = 3, max = 40)
    private String name;


    @NotNull
    @Column(unique = true)
    @Email
    @Size(min = 3, max = 40)
    private String email;
}
