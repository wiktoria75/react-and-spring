package com.app.app.book.service;

import com.app.app.book.model.BookAddRequestDto;
import com.app.app.book.model.BookDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BookService {
    List<BookDto> getUnfinishedBooks();

    List<BookDto> getFinishedBooks();

    String addBook(BookAddRequestDto bookAddRequestDto);
}
