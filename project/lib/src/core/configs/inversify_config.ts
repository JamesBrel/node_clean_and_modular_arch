import { Container } from "inversify";
import { SayHelloToWorldController } from "../../modules/hello_mod/features/say_hello_to_world/controllers/say_hello_to_world_controller.js";
import { HelloWorldImpl } from "../../modules/hello_mod/features/say_hello_to_world/data/data_source/impls/hello_to_world_impl.js";
import { IHelloWorld } from "../../modules/hello_mod/features/say_hello_to_world/data/data_source/interfaces/hello_to_world_inter.js";
import { SystemGreetTheWorldRepositImpl } from "../../modules/hello_mod/features/say_hello_to_world/data/reposit_impls/system_greet_the_world_reposit_impl.js";
import { ISystemGreetTheWorldReposit } from "../../modules/hello_mod/features/say_hello_to_world/domain/reposit_interfaces/system_greet_the_world_reposit_inter.js";
import { SayHelloWordUsecase } from "../../modules/hello_mod/features/say_hello_to_world/domain/usecases/say_hello_word_usecase.js";

const httpContainer: Container = new Container();

//! impls
httpContainer.bind<IHelloWorld>(HelloWorldImpl).to(HelloWorldImpl);

//! reposit impls
httpContainer.bind<ISystemGreetTheWorldReposit>(SystemGreetTheWorldRepositImpl).to(
  SystemGreetTheWorldRepositImpl
);

//! usecases
httpContainer.bind<SayHelloWordUsecase>(SayHelloWordUsecase).toSelf();

//! controllers
httpContainer.bind<SayHelloToWorldController>(SayHelloToWorldController).toSelf();

export { httpContainer };

