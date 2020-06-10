import dotenv from "dotenv";
dotenv.config();

const dbClient = new MongoDbClient();
import bodyParser from "body-parser";
import cors from "cors";

import index from "./routes/index";
import express from "express";
import common from "./common/common";
import MongoDbClient from "./database/MongoDbClient";
import ejs from "ejs";
import path from "path";

common.dbClient = dbClient;

// https://stackoverflow.com/a/30355080/6907541
delete process.env.BROWSER;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// View engine setup
app.set("views", path.join(__dirname, "static", "views"));
app.set("view engine", "ejs");

// Middleware
app.use("/public", express.static(path.join(__dirname, "static", "public")));

app.use("/", index);

// error handler
app.use(function (err, req, res, next) {
  console.log(err.stack);

  res.status(err.status || 500);

  res.json({
    errors: {
      message: err.message,
      error: err,
    },
  });
});

const port = 5001;
app.listen(port, () =>
  console.log(`app listening at http://localhost:${port}`)
);
