package com.app.app.book.controller;

import com.app.app.book.model.BookAddRequestDto;
import com.app.app.book.model.BookDto;
import com.app.app.book.service.BookService;
import jakarta.validation.ConstraintViolationException;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/unfinished")
    public ResponseEntity<List<BookDto>> getUnfinishedBooks() {
        return ResponseEntity.ok().body(bookService.getUnfinishedBooks());
    }

    @GetMapping("/finished")
    public ResponseEntity<List<BookDto>> getFinishedBooks() {
        return ResponseEntity.ok().body(bookService.getFinishedBooks());
    }

    @PostMapping("/add")
    public ResponseEntity<String> addBook(@Valid @RequestBody BookAddRequestDto bookAddRequestDto) {
        try {
            String title = bookService.addBook(bookAddRequestDto);
            return ResponseEntity.status(HttpStatus.CREATED).body("Book " + title + "successfully added");
        } catch (ConstraintViolationException ex) {
            return ResponseEntity.badRequest().body("Invalid book data");
        }
    }
}