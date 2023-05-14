const express = require("express");
const snacks = express.Router();


const {
  getAllSnacks,
  getASnack,
  addASnack,
  deleteASnack,
  updateASnack,
} = require("../queries/snacksQueries");

const reviewsController = require("./reviewsController");


snacks.use("/:snack_id/reviews", reviewsController);


// INDEX route
snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();

  if (allSnacks) {
    console.log(allSnacks);
    res.status(200).json(allSnacks);
  } else {
    res.status(404).json({ error: "server error" });
  }
});

// SHOW route
snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getASnack(id);
console.log("show route sucessfully reached")
  if (snack) {
    console.log(snack);
    res.status(200).json(snack);
    console.log(snack)
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE route
snacks.post("/", async (req, res) => {
  const newSnack = req.body;
  try {
    const addedSnack = await addASnack(newSnack);
    res.status(200).json(addedSnack);
  } catch (error) {
    res.status(404).json({ error: "not found" });
  }
});

// DELETE route
snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSnack = await deleteASnack(id);
    res.status(200).json(deletedSnack);
  } catch (error) {
    res.status(404).json({ error: "not found" });
  }
});

// UPDATE route
snacks.put("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = req.body;
  try {
    const updatedSnack = await updateASnack(id, snack);
    res.status(200).json(updatedSnack);
  } catch (error) {
    res.status(404).json({ error: "not found" });
  }
});

module.exports = snacks;
