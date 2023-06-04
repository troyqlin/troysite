import { send_mail } from "./contact.js";
import cors from "cors";
import express from "express";
// const express = require("express");
const app = express();
app.use(express.json());

const PORT = 8080;

app.use(cors());

app.use(express.static("public"));
app.use("/src", express.static("src"));
app.use("/build", express.static("build"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/", (req, res) => {
  const { name, email, message } = req.body;
  res.json(send_mail(name, email, message));
  // res.json(send_mail(name, email, message));
});

app.listen(PORT, () => console.log(`it's alive at http://localhost:${PORT}`));
