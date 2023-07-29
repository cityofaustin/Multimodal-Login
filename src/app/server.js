import express from "express";
import next from "next";
import http from "http";
import https from "https";
import fs from "fs";

import NextjsExpressRouter from "./nextjs_express_router";
import Middleware from "./middleware";

const httpServer = (express) => {
  return http.createServer(express);
};

const httpsServer = (express) => {
  const options = {
    key: fs.readFileSync(process.env.SSL_PRIVATE_KEY_PATH, "utf8"),
    cert: fs.readFileSync(process.env.SSL_CERTIFICATE_PATH, "utf8"),
  };
  return https.createServer(options, express);
};

class Server {
  constructor(port) {
    this.port = port;
    this.express = express();
    this.next = next({ dev: process.env.NODE_ENV !== "production" });
    this.middleware = new Middleware(this.express);
    this.router = new NextjsExpressRouter(this.express, this.next);
  }

  async start() {
    await this.next.prepare();
    await this.middleware.init();
    await this.router.init();
    this.server = httpServer(this.express);
    this.server.listen(5001);
  }
}

export default Server;
