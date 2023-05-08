const db = require("../db/dbConfig");

// Index query
const getAllSnacks = async () => {
    try {
        const allSnacks = await db.any("SELECT * FROM snacks");
        return allSnacks;
      } catch (error) {
        return error;
      }
};


// Show query

// Create query

// Delete query

// Update query

module.exports = { getAllSnacks };
