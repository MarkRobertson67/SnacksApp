const express = require("express");
const snacks = express.Router();

const { getAllSnacks } = require("../queries/snacksQueries");


// INDEX route
snacks.get("/", async (req, res) => {
    const allSnacks = await getAllSnacks();

    if (allSnacks) {
        res.status(200).json(allSnacks);
      } else {
        res.status(500).json({ error: "server error" });
      }
});


module.exports = snacks;