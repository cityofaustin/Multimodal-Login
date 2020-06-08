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

common.dbClient = dbClient;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set the view engine to ejs
app.set("view engine", "ejs");

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
  console.log(`Example app listening at http://localhost:${port}`)
);
