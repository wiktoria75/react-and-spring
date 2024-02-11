package com.app.app.auth.service;

import com.app.app.user.model.AppUser;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class SecurityContextProvider {

    public Optional<UUID> getLoggedInUserId() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.getPrincipal() instanceof AppUser loggedInUser) {
            return Optional.of(loggedInUser.getId());
        }
        return Optional.empty();
    }
}
