const express = require("express");
const reviews = express.Router({ mergeParams: true});

const {
  getAllReviews,
  getAReview,
  deleteReview,
  updateAReview,
  addAReview,
  // getIndexReviews,
} = require("../queries/reviewQueries");





//index route
reviews.get("/", async (req, res) => {
  const { snack_id } = req.params;
  try {
    const allReviews = await getAllReviews(snack_id);
    res.json(allReviews)
  } catch (err) {
    res.json(err)
  }
});


// SHOW ROUTE
reviews.get("/:id", async (req, res) => {
  const { id } = req.params;
  const review = await getAReview(id);
  if (review) {
    res.json(review);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// UPDATE 
reviews.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedReview = await updateAReview(id, req.body);
  if (updatedReview.id) {
    res.status(200).json(updatedReview);
  } else {
    res.status(404).json("Review not found");
  }
});


// CREATE ROUTE
reviews.post("/", async (req, res) => {
  const review = await addAReview(req.body);
  if (review) {
    res.status(200).json(review);
  } else {
    res.status(404).json({ error: "Review not found" });
  }

});

// DELETE ROUTE
reviews.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deletedReview = await deleteReview(id);
  if (deletedReview.id) {
    res.status(200).json(deletedReview);
  } else {
    res.status(404).json({ error: "Review not found" });
  }
});

// TEST JSON NEW
// {
//     "reviewer":"Lou",
//      "title": "Fryin Better",
//      "content": "With the great tips and tricks I found here",
//      "snack_id": "2",
//      "rating": "4"
// }
module.exports = reviews;