-- if our db already exists, drop it
DROP DATABASE IF EXISTS snacks;

-- Create our Database
CREATE DATABASE snacks;

-- Connect to the db
\c snacks;

-- Create a table for our songs

CREATE TABLE snack (   
    id SERIAL PRIMARY KEY,   
    name TEXT NOT NULL,   
    category TEXT NOT NULL,  
    rating NUMERIC
    CHECK (rating >= 0 AND rating <= 5),   
    calories INTEGER NOT NULL,   
    is_vegan BOOLEAN DEFAULT false,
    is_halal BOOLEAN DEFAULT false, 
    is_favorite BOOLEAN 

);

CREATE TABLE review (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    reviewer TEXT NOT NULL,
    content TEXT NOT NULL,
    snack_id INTEGER REFERENCES snack(id)
    ON DELETE CASCADE
);