import {injectable} from "inversify";
import {IHelloWorld} from "../interfaces/hello_to_world_inter.js";
/**
 * @author Organisation_Name
 * @dev Devlopper_Name
 * @description Description_File
 * @version 1.0.0
 * @since Date_of_file_creation
 * @email Developper_contact
 */
@injectable()
class HelloWorldImpl implements IHelloWorld {
  /**
   * @name Function_Name
   * @description Describe the Function
   * @param {data_type} Describe the param
   * @return {data_type} Describe the return
   */

  public sayTheHelloWorld(): string {
    return "Hello, World!";
  }
}

export {HelloWorldImpl};
