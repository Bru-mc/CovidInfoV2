const cors = require("cors");
const express = require("express");
const app = express();
const axios = require("axios");

app.use(cors());

app.get("/countries", async (req, res) => {
  try {
    const { data } = await axios("https://api.covid19api.com/countries");

    return res.json(data);
  } catch (error) {
    console.error(error);
  }
});

app.listen("4444");
