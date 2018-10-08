const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

// Bring in API Routes
const auth = require("./routes/api/auth");
const projects = require("./routes/api/projects");

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use Routes
app.use("/api/auth", auth);
app.use("/api/projects", projects);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

//
app.listen(port, () => console.log("App listening on 5000"));
