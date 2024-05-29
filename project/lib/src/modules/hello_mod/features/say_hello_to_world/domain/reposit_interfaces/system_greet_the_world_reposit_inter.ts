import { Result } from "../../../../../../shared/results/type.js";

interface ISystemGreetTheWorldReposit {
  systemSayHelloToWorld(): Promise<Result<string, undefined>>;
}

export { ISystemGreetTheWorldReposit };

