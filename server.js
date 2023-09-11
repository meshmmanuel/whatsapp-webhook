// Import required modules
const express = require("express");
const bodyParser = require("body-parser");

// Create an Express app
const app = express();

// Use bodyParser to parse JSON requests
app.use(bodyParser.json());

app.get("/webhook", (req, res) => {
  const queryParams = req.query;
  const hubModeValue = queryParams["hub.challenge"];
  res.send(hubModeValue);
});

app.post("/webhook", (req, res) => {
  const queryParams = req.query;
  res.send(queryParams);
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

