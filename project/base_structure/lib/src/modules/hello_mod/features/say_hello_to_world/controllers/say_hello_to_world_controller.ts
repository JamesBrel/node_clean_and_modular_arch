import {Request, Response} from "express";
import httpStatus from "http-status";
import {inject} from "inversify";
import {controller, httpGet} from "inversify-express-utils";
import {hello_api} from "../../../../../shared/constants/api.const.js";
import {v1} from "../../../../../shared/constants/version.const.js";
import {SayHelloWordUsecase} from "../domain/usecases/say_hello_word_usecase.js";

@controller(hello_api)
class SayHelloToWorldController {
  private _sayHelloWordUsecase: SayHelloWordUsecase;
  constructor(
    @inject(SayHelloWordUsecase) sayHelloWordUsecase: SayHelloWordUsecase
  ) {
    this._sayHelloWordUsecase = sayHelloWordUsecase;
  }

  @httpGet("/")
  public async getHelloWorld(_req: Request, _res: Response) {
    let _apiVersion = _req.header("Accept-Version");
    switch (_apiVersion) {
      case v1:
        let _helloWordMessage: string = this._sayHelloWordUsecase.execute();
        return _res.status(httpStatus.OK).json({message: _helloWordMessage});

      default:
        return _res
          .status(httpStatus.NOT_FOUND)
          .json({message: "version not exists"});
    }
  }
}

export {SayHelloToWorldController};
