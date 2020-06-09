"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _index = _interopRequireDefault(require("./routes/index"));

var _express = _interopRequireDefault(require("express"));

var _common = _interopRequireDefault(require("./common/common"));

var _MongoDbClient = _interopRequireDefault(require("./database/MongoDbClient"));

var _ejs = _interopRequireDefault(require("ejs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

const dbClient = new _MongoDbClient.default();
_common.default.dbClient = dbClient;
delete process.env.BROWSER;
const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
})); // View engine setup

app.set("views", _path.default.join(__dirname, 'static', "views"));
app.set("view engine", "ejs"); // Middleware

app.use('/public', _express.default.static(_path.default.join(__dirname, 'static', 'public')));
app.use("/", _index.default); // error handler

app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: err
    }
  });
});
const port = 5001;
app.listen(port, () => console.log(`app listening at http://localhost:${port}`));