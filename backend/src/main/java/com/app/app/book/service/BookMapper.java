package com.app.app.book.service;

import com.app.app.book.model.Book;
import com.app.app.book.model.BookAddRequestDto;
import com.app.app.book.model.BookDto;
import com.app.app.user.model.AppUser;

import java.util.List;

public interface BookMapper {
    List<BookDto> mapBooksToDto(List<Book> books);

    Book mapBookAddRequest(BookAddRequestDto bookAddRequestDto, AppUser appUser);
}
