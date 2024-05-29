import { inject, injectable } from "inversify";

import { Success } from "../../../../../../shared/results/result_success.js";
import { Result } from "../../../../../../shared/results/type.js";
import { ISystemGreetTheWorldReposit } from "../../domain/reposit_interfaces/system_greet_the_world_reposit_inter.js";
import { HelloWorldImpl } from "../data_source/impls/hello_to_world_impl.js";
import { IHelloWorld } from "../data_source/interfaces/hello_to_world_inter.js";

@injectable()
class SystemGreetTheWorldRepositImpl implements ISystemGreetTheWorldReposit {
  private _iHelloWorld: IHelloWorld;

  constructor(@inject(HelloWorldImpl) iHelloWorld: IHelloWorld) {
    this._iHelloWorld = iHelloWorld;
  }

  public async systemSayHelloToWorld(): Promise<Result<string, undefined>> {
    let _greeting: string = this._iHelloWorld.sayTheHelloWorld();
    return Success.result(_greeting);
  }
}

export { SystemGreetTheWorldRepositImpl };

