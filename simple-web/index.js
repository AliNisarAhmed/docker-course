const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi How are you doing");
});

app.listen(8080, () => {
  console.log("Listening on PORT: 8080");
});
