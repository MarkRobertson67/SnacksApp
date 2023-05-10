const db = require("../db/dbConfig");

// Index query
// const getIndexReviews = async () => {
//   try {
//     const allReviews = await db.any("SELECT * FROM reviews");
//     return allReviews;
//   } catch (error) {
//     return error;
//   }
// };



// Index query
const getAllReviews = async (snack_id) => {
  try {
    const allReviews = await db.any("SELECT * FROM review WHERE snack_id=$1", snack_id);
    return allReviews;
  } catch (error) {
    return error;
  }
};

// Show query
const getAReview = async (id) => {

  try {
    const oneReview = await db.one("SELECT * FROM review WHERE id=$1", id);
    return oneReview;
  } catch (error) {
    return error;
  }
};

// Create query

const addAReview = async (review) => {
  const { title, reviewer, content, snack_id } = review;

  try {
    const newReview = await db.one(
      "INSERT INTO review (title, reviewer, content, snack_id) VALUES($1, $2, $3, $4) RETURNING *",
      [title, reviewer, content, snack_id]
    );
    return newReview;
  } catch (error) {
    return error;
  }
};

// Delete query
const deleteReview = async (id) => {
  try {
    const deletedReview = await db.one(
      "DELETE FROM review WHERE id = $1 RETURNING *",
      id
    );
    return deletedReview;
  } catch (error) {
    return error;
  }
};

// Update query

const updateAReview = async (id, review) => {
  const { title, reviewer, content, snack_id } = review;
  try {
    const updatedReview = await db.one(
      "UPDATE review SET title = $1, reviewer = $2, content = $3, snack_id = $4 WHERE id = $5 RETURNING *",
      [title, reviewer, content, snack_id, id]
    );
    return updatedReview;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllReviews,
  getAReview,
  addAReview,
  deleteReview,
  updateAReview,
  // getIndexReviews,
};
