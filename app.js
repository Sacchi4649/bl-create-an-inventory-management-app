require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const connectDatabase = require("./database");
const Router = require("./routes");

connectDatabase();

app.use(express.urlencoded({ extended: true }));
app.use("/", Router);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
