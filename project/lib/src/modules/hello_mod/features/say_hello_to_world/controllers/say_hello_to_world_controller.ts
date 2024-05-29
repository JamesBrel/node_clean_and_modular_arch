import { Request, Response } from "express";
import httpStatus from "http-status";
import { inject } from "inversify";
import { controller, httpGet, request, response } from "inversify-express-utils";
import { hello_api } from "../../../../../shared/constants/api_const.js";
import { v1 } from "../../../../../shared/constants/version_const.js";
import { Success } from "../../../../../shared/results/result_success.js";
import { SayHelloWordUsecase } from "../domain/usecases/say_hello_word_usecase.js";

@controller(hello_api)
class SayHelloToWorldController {
  private _sayHelloWordUsecase: SayHelloWordUsecase;
  constructor(
    @inject(SayHelloWordUsecase) sayHelloWordUsecase: SayHelloWordUsecase
  ) {
    this._sayHelloWordUsecase = sayHelloWordUsecase;
  }

  @httpGet("/")
  public async getHelloWorld(
    @request() _req: Request,
    @response() _res: Response
  ) {
    let _apiVersion = _req.header("Api-Version");
    switch (_apiVersion) {
      case v1:
        let _result = await this._sayHelloWordUsecase.execute();
        if (_result instanceof Success) {
          _res.status(httpStatus.OK).json({
            message: "system greet successfully",
            data: _result.data
          });
        }
        break;
      default:
        _res.status(httpStatus.NOT_FOUND).json({message: "version not exists"});
        break;
    }
  }
}

export { SayHelloToWorldController };

