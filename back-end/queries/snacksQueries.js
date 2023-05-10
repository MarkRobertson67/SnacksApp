const db = require("../db/dbConfig");

// Index query
const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any("SELECT * FROM snack");
    return allSnacks;
  } catch (error) {
    return error;
  }
};

// Show query
const getASnack = async (id) => {
  try {
    const oneSnack = await db.one("SELECT * FROM snack WHERE id=$1", id);
    return oneSnack;
  } catch (error) {
    return error;
  }
};

// Create query

const addASnack = async (snack) => {
  const { name, category, rating, calories, is_vegan, is_halal, is_favorite } = snack;

  try {
    const newSnack = await db.one(
      "INSERT INTO snack (name, category, rating, calories, is_vegan, is_halal, is_favorite) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [name, category, rating, calories, is_vegan, is_halal, is_favorite]
    );
    return newSnack;
  } catch (error) {
    return error;
  }
};

// Delete query
const deleteASnack = async (id) => {
  try {
    const deletedSnack = await db.one(
      "DELETE FROM snack WHERE id = $1 RETURNING *",
      id
    );
    return deletedSnack;
  } catch (error) {
    return error;
  }
};

// Update query
const updateASnack = async (id, snack) => {
  const { name, category, rating, calories, is_vegan, is_halal, is_favorite } =
    snack;
  try {
    const updatedSnack = await db.one(
      "UPDATE snack SET name = $1, category = $2, rating = $3, calories = $4, is_vegan = $5, is_halal = $6, is_favorite = $7 WHERE id = $8 RETURNING *",
      [name, category, rating, calories, is_vegan, is_halal, is_favorite, id]
    );
    return updatedSnack;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSnacks,
  getASnack,
  addASnack,
  deleteASnack,
  updateASnack,
};
