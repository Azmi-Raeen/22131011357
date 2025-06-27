// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Logging Middleware
app.use((req, res, next) => {
  const log = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`;
  console.log(log);
  next();
});

app.use(cors());
app.use(express.json());

// POST endpoint to receive logs
app.post("/log", (req, res) => {
  console.log("Received log data:", req.body);
  res.json({ status: "Logged successfully" });
});

// GET endpoint for testing
app.get("/", (req, res) => {
  res.send("Logging Middleware Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
