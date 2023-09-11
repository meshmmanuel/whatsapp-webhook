// Import required modules
const express = require("express");
const bodyParser = require("body-parser");

// Create an Express app
const app = express();

// Use bodyParser to parse JSON requests
app.use(bodyParser.json());

// Define a route to handle incoming webhook requests
app.get("/webhook", (req, res) => {
  // Respond with a simple message
  const queryParams = req.query;
  const hubModeValue = queryParams["hub.challenge"];
  res.send(hubModeValue);
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

