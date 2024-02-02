import {inject, injectable} from "inversify";
import {ISystemGreetTheWorldReposit} from "../../domain/reposit_interfaces/system_greet_the_world_reposit_inter.js";
import {HelloWorldImpl} from "../data_source/impls/hello_to_world_impl.js";
import {IHelloWorld} from "../data_source/interfaces/hello_to_world_inter.js";

@injectable()
class SystemGreetTheWorldRepositImpl implements ISystemGreetTheWorldReposit {
  private _iHelloWorld: IHelloWorld;

  constructor(@inject(HelloWorldImpl) iHelloWorld: IHelloWorld) {
    this._iHelloWorld = iHelloWorld;
  }

  public systemSayHelloToWorld(): string {
    return this._iHelloWorld.sayTheHelloWorld();
  }
}

export {SystemGreetTheWorldRepositImpl};
