const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const snacksRoutes = require("./controllers/snacksController");


app.use(cors());
app.use(express.json());
app.use(logger("dev"));

app.use("/snacks", snacksRoutes);


app.get("/", (req, res) => {
    res.json( {message: "Welcome to the Snack App Back-end"} );
    }
);

app.get ("*", (req, res) => {

    res.status(404).json({message: "Page Not Found"});
});


module.exports = app;
