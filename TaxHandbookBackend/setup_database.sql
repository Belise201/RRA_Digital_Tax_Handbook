-- ================================================
-- RRA Tax Handbook — PostgreSQL Setup Script
-- Run this ONCE before starting the backend
-- ================================================

-- 1. Create the database
CREATE DATABASE tax_handbook_db;

-- 2. Connect to it (run this in psql)
-- \c tax_handbook_db

-- 3. The "users" table is auto-created by Spring Boot (ddl-auto=update)
--    But you can pre-create it manually with:

CREATE TABLE IF NOT EXISTS users (
    id         BIGSERIAL PRIMARY KEY,
    email      VARCHAR(255) UNIQUE NOT NULL,
    password   VARCHAR(255)        NOT NULL,
    role       VARCHAR(20)         NOT NULL DEFAULT 'TAXPAYER',
    first_name VARCHAR(100),
    last_name  VARCHAR(100),
    created_at TIMESTAMP DEFAULT NOW()
);

-- 4. The admin user is auto-seeded by Spring Boot on first startup.
--    Admin credentials:
--      Email:    admin@rra.gov.rw
--      Password: Admin@RRA2024

-- 5. Verify after running the backend:
SELECT id, email, role, first_name, last_name, created_at FROM users;
