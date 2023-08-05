// https://github.com/alexey-dc/nextjs_express_template/tree/main
import "./config";
import Server from "./src/app/server";
import common from "./src/common/common";

const begin = async () => {
  await common.dbClient.populateDefaultValues();
  await new Server(5001).start();
  console.log(
    `Server running in --- ${process.env.NODE_ENV} --- on port ${5001}`
  );
};

begin();
