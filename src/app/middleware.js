import bodyParser from "body-parser";
// import path from "path";
// import oauthServer from "../services/OauthService";
// const favicon = require("serve-favicon");

class Middleware {
  constructor(express) {
    this.express = express;
  }

  async init() {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    // this.express.use(
    //   favicon(path.join(__dirname, "..", "public", "favicon.png"))
    // );
    // this.express.oauth = oauthServer;
    // this.express.use(this.express.oauth.authorize());

    this.initErrors();
  }

  initErrors() {
    this.express.use(async (err, req, res, next) => {
      /* This will be the first error handler to be called */
      console.error("Unexpected error");
      return next(err);
    });
  }
}

export default Middleware;
