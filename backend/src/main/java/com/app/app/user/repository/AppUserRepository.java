package com.app.app.user.repository;

import com.app.app.user.model.AppUser;
import com.app.app.user.model.StudentDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface AppUserRepository extends JpaRepository<AppUser, UUID> {
    Optional<AppUser> findByEmail(String email);

    @Query("SELECT new com.app.app.user.model.StudentDto(u.name, u.email, COUNT(b.id)) " +
            "FROM AppUser u " +
            "JOIN u.books b " +
            "WHERE b.isRead = true " +
            "GROUP BY u.id " +
            "ORDER BY COUNT(b.id) DESC")
    List<StudentDto> findAllStudentsWithBookCount();
}
