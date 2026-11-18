
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/status", (req, res) => {
  res.json({
    name: "JANNAT AI",
    status: "online",
    version: "1.0.0"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("JANNAT AI running on port " + PORT);
});

