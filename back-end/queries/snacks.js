const db = require("../db/dbConfig");

// Index query
const getAllSnacks = async () => {
    try {
        const allSnacks = await db.any("SELECT id, name, description, price, calories, is_vegan, created_date, current_date, updated_date");
        return allSongs;
      } catch (error) {
        return error;
      }
};


// Show query

// Create query

// Delete query

// Update query
