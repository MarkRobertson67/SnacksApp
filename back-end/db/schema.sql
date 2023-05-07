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
    description TEXT,   
    price NUMERIC(8, 2) NOT NULL,   
    calories INTEGER NOT NULL,   
    is_vegan BOOLEAN DEFAULT false,   
    created_date DATE DEFAULT current_date,   
    updated_date DATE
);