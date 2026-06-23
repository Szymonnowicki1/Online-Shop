const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const products = require("./db.json");

app.get("/products", (req, res) => {
  res.json(products.products);
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});