package com.app.app.book.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class BookDto {
    String id;
    private String title;
    private String author;
    private String note;
    private boolean hasBeenRead;


}
