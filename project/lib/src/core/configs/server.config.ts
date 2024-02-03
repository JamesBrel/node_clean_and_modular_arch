import {InversifyExpressServer} from "inversify-express-utils";

import {app} from "../../shared/constants/string.const.js";
import Logger from "../../shared/logs/logger.js";
import {sl} from "./inversify.config.js";

class ServerConfig {
  public static async server() {
    try {
      let _server = new InversifyExpressServer(sl);
      let _port = process.env.PORT;
      let _hostname = process.env.HOSTNAME;
      _server.build().listen(_port, () => {
        Logger.info(
          "Server",
          `---- ${app}'s Server is running on ${_hostname}:${_port} 🔥 -----`
        );
      });
    } catch (error) {
      Logger.error("Server", `---- ${error} ----`);
      process.exit();
    }
  }
}

export default ServerConfig;
