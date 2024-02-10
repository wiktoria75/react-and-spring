CREATE TABLE IF NOT EXISTS APP_USER (
                                        id UUID PRIMARY KEY,
                                        password VARCHAR(255) NOT NULL,
    name VARCHAR(40) NOT NULL,
    email VARCHAR(40) NOT NULL,
    role VARCHAR(20) NOT NULL
    );
INSERT INTO app_user (id, name, email, password, role)
VALUES (
           '123e4567-e89b-12d3-a456-426614174000',
           'Admin',
           'admin@com.com',
           '$2a$10$TVG8L.cWkzGBEjRvvpJx6.ZzyJkKxEer7BkGkwj1B.9RYZgHL7D3e', -- Encrypted password (bcrypt hash) for 'Admin123@'
           'ADMIN'
       );