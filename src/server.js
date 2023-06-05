import { send_mail } from "./contact.js";
import cors from "cors";
import express from "express";
import path from "path";
// const express = require("express");
const app = express();
app.use(express.json());

const PORT = 8080;

app.use(cors());

app.use(express.static("docs"));
app.use(express.static("src"));
// app.use("/docs", express.static("docs"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/test", (req, res) => {
  const { name, email, message } = req.query;
  send_mail(name, email, message);
  // res.sendFile("submit.html", { root: path.join(".", "/docs") });
  // res.json(send_mail(name, email, message));
});

app.listen(PORT, () => console.log(`it's alive at http://localhost:${PORT}`));
