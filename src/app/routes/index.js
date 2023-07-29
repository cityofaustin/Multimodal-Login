import express from "express";
// import { Router } from "express";
import auth from "./auth";
// import user from "./user";
import api from "./api";

class Api {
  constructor(express, next) {
    this.express = express;
    this.next = next;
  }

  init() {
    // const router = Router();

    // router.use(pages);
    // this.express.use(auth);
    // this.express.use(user);
    const router = express.Router();
    // router.use(pages);
    router.use(auth);
    router.use("/api", api);
    this.express.use(router);
    // router.use("/api", api);
    this.express.get("/api/get", (req, res) => {
      res.send({ i: 1 });
    });

    // this.express.post("/api/increment", (req, res) => {
    //   res.send({ i: 1 });
    // });

    this.express.get("*", (req, res) => {
      return this.next.render(req, res, `${req.path}`, req.query);
    });
  }
}

export default Api;
