// import dotenv from "dotenv";
// import path from "path";

import common from "./common/common";

// const filePath = path.resolve(process.cwd(), ".env.local");
// dotenv.config();

(async () => {
  common.dbClient.populateDefaultValues();
})();
