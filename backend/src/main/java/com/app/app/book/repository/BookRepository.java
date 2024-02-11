package com.app.app.book.repository;

import com.app.app.book.model.Book;
import com.app.app.user.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface BookRepository extends JpaRepository<Book, UUID> {

    @Query("SELECT b FROM Book b JOIN b.appUser u WHERE u = :user AND b.isRead = false")
    List<Book> findUnreadBooksByUser(@Param("user") AppUser user);

    @Query("SELECT b FROM Book b JOIN b.appUser u WHERE u = :user AND b.isRead = true")
    List<Book> findFinishedBooksByUser(@Param("user") AppUser user);
}
