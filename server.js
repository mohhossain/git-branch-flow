const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// add cors
const cors = require("cors");
app.use(cors());

// add body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// add another middleware
app.use((req, res, next) => {
  console.log("This is a middleware!");
  next();
});

// add routes
const routes = require("./routes/routes.js")(app);
// add a greeting route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
