const express = require("express");
const songs = express.Router();


// INDEX route
snack.get("/", async (req, res) => {
    const allSnacks = await getAllSnacks();

    if (allSnacks) {
        res.status(200).json(allSnacks);
      } else {
        res.status(500).json({ error: "server error" });
      }
});


module.exports = snacks