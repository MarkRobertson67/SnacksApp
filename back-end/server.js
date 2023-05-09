const app = require("./app");

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {

    console.log(`Server is listening on port ${PORT}`);
}
);
// Path: back-end/db/dbConfig.js

