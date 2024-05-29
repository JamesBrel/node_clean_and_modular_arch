import { inject, injectable } from "inversify";

import { Result } from "../../../../../../shared/results/type.js";
import { SystemGreetTheWorldRepositImpl } from "../../data/reposit_impls/system_greet_the_world_reposit_impl.js";
import { ISystemGreetTheWorldReposit } from "../reposit_interfaces/system_greet_the_world_reposit_inter.js";

@injectable()
class SayHelloWordUsecase {
  private _iSystemGreetTheWorldReposit: ISystemGreetTheWorldReposit;
  constructor(
    @inject(SystemGreetTheWorldRepositImpl)
    _iSystemGreetTheWorldReposit: ISystemGreetTheWorldReposit
  ) {
    this._iSystemGreetTheWorldReposit = _iSystemGreetTheWorldReposit;
  }

  public async execute(): Promise<Result<string, undefined>> {
    return await this._iSystemGreetTheWorldReposit.systemSayHelloToWorld();
  }
}

export { SayHelloWordUsecase };

