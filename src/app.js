import dotenv from "dotenv";
dotenv.config();

const dbClient = new MongoDbClient();
import bodyParser from "body-parser";
import cors from "cors";

import index from "./routes/index";
import express from "express";
import fileUpload from "express-fileupload";

import common from "./common/common";
import MongoDbClient from "./database/MongoDbClient";
import ejs from "ejs";
import path from "path";

var fs = require("fs");
var https = require("https");

common.dbClient = dbClient;

// https://stackoverflow.com/a/30355080/6907541
delete process.env.BROWSER;

const app = express();

if (
  process.env.ENVIRONMENT === "DEVELOPMENT" ||
  process.env.ENVIRONMENT === "HEROKU"
) {
  app.use(cors());
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }));

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
let key;
let cert;
try {
  key = fs.readFileSync("/home/ubuntu/STAGING/CERTS/server-key.pem");
  cert = fs.readFileSync("/home/ubuntu/STAGING/CERTS/server-cert.pem");
} catch (err) {
  console.log("key or cert not available. Continuing... ");
}

if (key !== undefined && cert !== undefined) {
  https
    .createServer(
      {
        key: key,
        cert: cert,
      },
      app
    )
    .listen(port, function () {
      console.log(
        `app listening at http://localhost:${port} with https key + cert`
      );
    });
} else {
  const server = app.listen(process.env.PORT || port, function () {
    console.log("Oauth Server Listening on port " + server.address().port);
  });
}
