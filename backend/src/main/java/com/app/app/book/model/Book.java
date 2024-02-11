package com.app.app.book.model;
import com.app.app.user.model.AppUser;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.UUID;

@Entity
@Builder
@Getter
@AllArgsConstructor
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @NotBlank
    @Size(max = 50)
    private String title;

    @NotBlank
    @Size(max = 50)
    private String author;

    @Size(max = 400)
    private String note;

    @NotNull
    private boolean isRead;

    @ManyToOne
    private AppUser appUser;

    public Book() {
    }
}
