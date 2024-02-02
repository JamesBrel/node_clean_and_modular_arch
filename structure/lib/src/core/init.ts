import dotenv from "dotenv";
import express from "express";
import "reflect-metadata";
import {MiddleConfig} from "./configs/middle.config.js";
import ServerConfig from "./configs/server.config.js";
class Init {
  public static async start() {
    dotenv.config();
    const _app = express();
    ServerConfig.server().then(() => {
      MiddleConfig.middle(_app, express);
    });
  }
}
export {Init};
