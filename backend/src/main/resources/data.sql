INSERT INTO app_user (id, name, email, password, role)
VALUES (
           '123e4567-e89b-12d3-a456-426614174000',
           'Admin',
           'admin@com.com',
           '$2a$10$TVG8L.cWkzGBEjRvvpJx6.ZzyJkKxEer7BkGkwj1B.9RYZgHL7D3e', -- Encrypted password (bcrypt hash) for 'Admin123@'
           'ADMIN'
       ),
       (
           'a791802c-dfaa-43eb-b49a-82ce2ae4862c',
           'wiki',
           'wiki@pl.pl',
           '$2a$10$s.ZSe7GWfICdf2Qen7NpPuQRatgT2AUfwUg5Rysq3mhAFcqNIA6MO',	-- Encrypted password (bcrypt hash) for 'Password123@'
           'USER'
       ),
       (
           '333e4567-e89b-12d3-a456-426614174000',
           'User1',
           'user1@example.com',
           '$2a$10$Vpj9zDgFzBDYcYQUMytzI.3ElqXwec/iJgbYPZjGnawwOlMh/pPm.', -- Encrypted password (bcrypt hash) for 'User1123@'
           'USER'
       ),
       (
           '444e4567-e89b-12d3-a456-426614174000',
           'User2',
           'user2@example.com',
           '$2a$10$xOosKvC7DjdzFBobYwSLd.7FQCKV/b8bfZlT8TrbWWs6cPYP988Dq', -- Encrypted password (bcrypt hash) for 'User2123@'
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
    ),
--
    (
        'c72e0ccf-6cd7-4e76-9a14-49d78d8100c7',
        'The Alchemist',
        'Paulo Coelho',
        'Inspirational tale about following one’s dreams.',
        false,
        '333e4567-e89b-12d3-a456-426614174000'
    ),
    (
        'a59e7bcf-8a26-41c8-b409-0b93c1bea1a1',
        'The Catcher in the Rye',
        'J.D. Salinger',
        'Classic novel exploring teenage angst and alienation.',
        false,
        '333e4567-e89b-12d3-a456-426614174000'
    ),
    (
        '72c88d6b-eb2a-4f33-ae9f-1b12aa10d384',
        'The Hobbit',
        'J.R.R. Tolkien',
        'Fantasy novel about a hobbit who embarks on an epic quest.',
        false,
        '333e4567-e89b-12d3-a456-426614174000'
    ),
    (
        '62c88d6b-eb2a-4f33-ae9f-1b12aa10d385',
        'The Chronicles of Narnia',
        'C.S. Lewis',
        'Fantasy series following the adventures of children in the magical land of Narnia.',
        true,
        '333e4567-e89b-12d3-a456-426614174000'
    ),
--
    (
        'd23e7bcf-8a26-41c8-b409-0b93c1bea1a1',
        'The Lord of the Rings',
        'J.R.R. Tolkien',
        'Epic fantasy adventure set in the fictional world of Middle-earth.',
        true,
        '444e4567-e89b-12d3-a456-426614174000'
    ),
    (
        'f4ee7bcf-8a26-41c8-b409-0b93c1bea1a1',
        'The Da Vinci Code',
        'Dan Brown',
        'Mystery thriller novel involving secret societies and ancient conspiracies.',
        true,
        '444e4567-e89b-12d3-a456-426614174000'
    ),
    (
        '82c88d6b-eb2a-4f33-ae9f-1b12aa10d384',
        'The Hunger Games',
        'Suzanne Collins',
        'Dystopian novel set in a post-apocalyptic world.',
        false,
        '444e4567-e89b-12d3-a456-426614174000'
    ),
    (
        '92c88d6b-eb2a-4f33-ae9f-1b12aa10d385',
        'Harry Potter and the Sorcerer''s Stone',
        'J.K. Rowling',
        'First book in the Harry Potter series, following the young wizard Harry Potter.',
        true,
        '444e4567-e89b-12d3-a456-426614174000'
    );