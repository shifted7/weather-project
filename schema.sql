DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS locations;

CREATE TABLE locations (
    id SERIAL,
    user_name VARCHAR(255),
    location_name VARCHAR(255) PRIMARY KEY,
    weather_data TEXT
    );

SELECT * FROM locations;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(255) NOT NULL UNIQUE,
  password TEXT not NULL
);

SELECT * FROM users;