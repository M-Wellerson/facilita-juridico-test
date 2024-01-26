CREATE TABLE IF NOT EXISTS clients
(
    id           serial PRIMARY KEY,
    name         VARCHAR(255) UNIQUE NOT NULL,
    email        VARCHAR(255) UNIQUE NOT NULL,
    cellphone    VARCHAR(50)         NOT NULL,
    coordinate_x INT                 NOT NULL,
    coordinate_y INT                 NOT NULL
);