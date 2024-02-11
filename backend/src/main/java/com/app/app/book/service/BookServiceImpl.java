package com.app.app.book.service;

import com.app.app.auth.service.SecurityContextProvider;
import com.app.app.book.model.Book;
import com.app.app.book.model.BookAddRequestDto;
import com.app.app.book.model.BookDto;
import com.app.app.book.repository.BookRepository;
import com.app.app.user.model.AppUser;
import com.app.app.user.repository.AppUserRepository;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;

    private final AppUserRepository appUserRepository;
    private final SecurityContextProvider securityContextProvider;
    private final BookMapper bookMapper;

    public BookServiceImpl(BookRepository bookRepository, AppUserRepository appUserRepository, SecurityContextProvider securityContextProvider, BookMapper bookMapper) {
        this.bookRepository = bookRepository;
        this.appUserRepository = appUserRepository;
        this.securityContextProvider = securityContextProvider;
        this.bookMapper = bookMapper;
    }

    @Override
    public List<BookDto> getUnfinishedBooks() {
        return bookMapper.mapBooksToDto(bookRepository.findUnreadBooksByUser(getAppUser()));
    }

    @Override
    public List<BookDto> getFinishedBooks() {
        return bookMapper.mapBooksToDto(bookRepository.findFinishedBooksByUser(getAppUser()));
    }

    public String addBook(BookAddRequestDto bookAddRequestDto) {
        AppUser appUser = getAppUser();
        Book bookAddRequest = bookMapper.mapBookAddRequest(bookAddRequestDto, appUser);
        Book book = bookRepository.save(bookAddRequest);
        return book.getTitle();
    }

    private AppUser getAppUser() {
        UUID loggedInUserId = securityContextProvider.getLoggedInUserId()
                .orElseThrow(() -> new BadCredentialsException("Do not recognize user"));
        return appUserRepository.findById(loggedInUserId).get();
    }
}
