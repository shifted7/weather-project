DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS locations;

CREATE TABLE locations (
    id SERIAL,
    api_name VARCHAR(255),
    location_name VARCHAR(255),
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6),
    percipitation DECIMAL(3,1),
    humidity DECIMAL(3,1),
    wind_speed DECIMAL(4,1),
    wind_direction DECIMAL(3),
    description VARCHAR(255),
    date_modified DATE
    );

SELECT * FROM locations;

