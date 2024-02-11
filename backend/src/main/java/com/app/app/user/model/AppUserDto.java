package com.app.app.user.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AppUserDto {
    private String name;
    private String email;
    private int finishedBooks;
}
