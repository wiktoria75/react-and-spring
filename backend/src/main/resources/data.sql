INSERT INTO app_user (id, name, email, password, role)
VALUES (
           '123e4567-e89b-12d3-a456-426614174000',
           'Admin',
           'admin@com.com',
           '$2a$10$TVG8L.cWkzGBEjRvvpJx6.ZzyJkKxEer7BkGkwj1B.9RYZgHL7D3e', -- Encrypted password (bcrypt hash) for 'Admin123@'
           'ADMIN'
       ),(
           'a791802c-dfaa-43eb-b49a-82ce2ae4862c',
           'wiki',
           'wiki@pl.pl',
           '$2a$10$s.ZSe7GWfICdf2Qen7NpPuQRatgT2AUfwUg5Rysq3mhAFcqNIA6MO',	-- Encrypted password (bcrypt hash) for 'Password123@'
           'USER'
       );

INSERT INTO BOOK (id, title, author, note, is_read, app_user_id)
VALUES
    (
        '47c88d6b-eb2a-4f33-ae9f-1b12aa10d383',
        'To Kill a Mockingbird',
        'Harper Lee',
        'Classic novel about racial injustice in the American South.',
        true,
        'a791802c-dfaa-43eb-b49a-82ce2ae4862c'
    ),
    (
        '42c3e17c-d9de-4a86-b8f6-34e870361a0b',
        '1984',
        'George Orwell',
        'Dystopian fiction about totalitarianism and surveillance.',
        true,
        'a791802c-dfaa-43eb-b49a-82ce2ae4862c'
    ),
    (
        'ac2e7f8a-6cd7-4e76-9a14-49d78d8100c7',
        'Pride and Prejudice',
        'Jane Austen',
        'Romantic novel set in rural England.',
        false,
        'a791802c-dfaa-43eb-b49a-82ce2ae4862c'
    ),
    (
        'faea6bcf-8a26-41c8-b409-0b93c1bea1a1',
        'The Great Gatsby',
        'F. Scott Fitzgerald',
        'Story of the American Dream and its corruption in the Jazz Age.',
        false,
        'a791802c-dfaa-43eb-b49a-82ce2ae4862c'
    );

-- INSERT INTO APP_USER_BOOKS (app_user_id, books_id) VALUES
--        ('a791802c-dfaa-43eb-b49a-82ce2ae4862c', '47c88d6b-eb2a-4f33-ae9f-1b12aa10d383'),
--        ('a791802c-dfaa-43eb-b49a-82ce2ae4862c', '42c3e17c-d9de-4a86-b8f6-34e870361a0b'),
--        ('a791802c-dfaa-43eb-b49a-82ce2ae4862c', 'ac2e7f8a-6cd7-4e76-9a14-49d78d8100c7'),
--        ('a791802c-dfaa-43eb-b49a-82ce2ae4862c', 'faea6bcf-8a26-41c8-b409-0b93c1bea1a1');