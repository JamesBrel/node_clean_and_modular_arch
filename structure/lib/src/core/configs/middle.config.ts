import bodyParser from "body-parser";
import cors from "cors";
import {Express} from "express-serve-static-core";
import morgan from "morgan";

class MiddleConfig {
  /**
   * @name middle
   * @param _app app name
   * @param _express express name
   * @returns {null} ne retorne rien
   */
  public static middle(_app: Express, _express: typeof import("express")) {
    _app.use(cors({origin: "*"}));
    _app.use(bodyParser.json());
    _app.use(bodyParser.urlencoded({extended: true}));
    _app.use(_express.json());
    _app.use(morgan("dev"));
  }
}
export {MiddleConfig};
