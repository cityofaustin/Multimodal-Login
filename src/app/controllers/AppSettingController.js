import axios from "axios";
import * as express from "express";
// import common from "../common/common";
// import { getRandomInt } from "../util/random-util";
// import { v4 as uuidv4 } from "uuid";

class AppSettingController {
  path = "/app-settings";
  router = express.Router();

  constructor() {
    this.initializeRoutes();
    return this.router;
  }

  initializeRoutes() {
    this.router.get(this.path, this.getAppSettings);
  }

  // server
  getAppSettings = async (req, res) => {
    try {
      const url = `${process.env.BACKEND_URI}/admin/app-settings`;
      const init = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      const response = await axios({ url, ...init });
      const appSettings = response.data.map((a) => {
        return {
          settingName: a.settingName,
          settingValue: a.settingValue,
        };
      });
      return res.status(200).json(appSettings);
    } catch (err) {
      console.error(err.stack);
      return res.status(500).send("Internal Server Error");
    }
  };
}

export default AppSettingController;
