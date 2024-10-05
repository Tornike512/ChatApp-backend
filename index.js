import express from "express";

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(() => {
  console.log(`Listening on Port ${PORT}`);
});
