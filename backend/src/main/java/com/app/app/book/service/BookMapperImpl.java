package com.app.app.book.service;

import com.app.app.book.model.Book;
import com.app.app.book.model.BookAddRequestDto;
import com.app.app.book.model.BookDto;
import com.app.app.user.model.AppUser;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookMapperImpl implements BookMapper {

    @Override
    public List<BookDto> mapBooksToDto(List<Book> books) {
        return books.stream()
                .map(this::mapBooksToDto)
                .collect(Collectors.toList());
    }

    @Override
    public Book mapBookAddRequest(BookAddRequestDto bookAddRequestDto, AppUser appUser) {
        return Book.builder()
                .author(bookAddRequestDto.getAuthor())
                .title(bookAddRequestDto.getTitle())
                .note(bookAddRequestDto.getNote())
                .appUser(appUser)
                .isRead(bookAddRequestDto.isRead())
                .build();
    }

    public BookDto mapBooksToDto(Book book) {
        return new BookDto(book.getId().toString(),
                book.getTitle(),
                book.getAuthor(),
                book.getNote(),
                book.isRead());
    }
}
