const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// add some routes
app.get("/api/users", (req, res, next) => {
  res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});// add cors
const cors = require("cors");
app.use(cors());

// add body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// add routes
const routes = require("./routes/routes.js")(app);
// add a greeting route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
