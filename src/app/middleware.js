import bodyParser from "body-parser";
import cors from "cors";
import fileUpload from "express-fileupload";

// import path from "path";
// import oauthServer from "../services/OauthService";
// const favicon = require("serve-favicon");

class Middleware {
  constructor(express) {
    this.express = express;
  }

  async init() {
    // NOTE: always use express cors as nginx doesn't send cors on failure
    this.express.use(cors());
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(fileUpload({ useTempFiles: true }));
    // this.express.use(bodyParser.urlencoded({ extended: false }));
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
