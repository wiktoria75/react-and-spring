package com.app.app.user.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class StudentDto {

    private String name;
    private String email;
    private Long bookCount;

}
