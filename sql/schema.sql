DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS locations;

CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    city_name VARCHAR(255),
    date_stamp NUMERIC(10),
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6),
    temperature DECIMAL(4,1),
    humidity DECIMAL(3,1),
    wind_speed DECIMAL(4,1),
    wind_direction NUMERIC(3),
    description VARCHAR(255),
    api_name VARCHAR(255),
    date_retrieved VARCHAR(255),
    UNIQUE (city_name, api_name)
    );

SELECT * FROM locations;

