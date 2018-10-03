DROP TABLE IF EXISTS pokemon;
DROP TABLE IF EXISTS trainers;

CREATE TABLE IF NOT EXISTS pokemon (
    id SERIAL PRIMARY KEY,
    name TEXT,
    img TEXT,
    weight VARCHAR,
    height VARCHAR
);


CREATE TABLE IF NOT EXISTS trainers (
    id SERIAL PRIMARY KEY,
    name TEXT
);
