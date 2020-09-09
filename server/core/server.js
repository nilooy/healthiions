//=================================================>
// Import Packages
//=================================================>
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const helmet = require("helmet");
const mongoose = require("mongoose");
const useRoutes = require("../routes.js");
const rfs = require("rotating-file-stream");
const path = require("path");
const morgan = require("morgan");

class Server {
  constructor() {
    dotenv.config();

    this.port = process.env.PORT || 8000;
    this.db = process.env.DATABASE_URL;

    this.app = express();

    this.addMiddlewares();
    this.createLog();

    useRoutes(this.app);

    this.connectDatabase();
    this.initServer();
  }

  //=================================================>
  // Add middleware
  //=================================================>
  addMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(helmet());
  }

  //=================================================>
  // Add routes
  //=================================================>
  addRoutes() {}

  //=================================================>
  // Connect Database
  //=================================================>
  connectDatabase() {
    mongoose
      .connect(this.db, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      })
      .then(() => {
        console.log("@=> Database connected with mongoose");
      })
      .catch((err) => console.log(err));
  }

  createLog() {
    const accessLogStream = rfs.createStream("access.log", {
      interval: "1d", // rotate daily
      path: path.join(__dirname, "../log"),
    });

    // setup the logger
    this.app.use(morgan("dev"));
    this.app.use(morgan("combined", { stream: accessLogStream }));
  }

  //=================================================>
  // Init Server
  //=================================================>
  initServer() {
    this.app.listen(this.port, () => {
      console.log("@=> App is listening on port:", this.port);
    });
  }
}

module.exports = Server;
