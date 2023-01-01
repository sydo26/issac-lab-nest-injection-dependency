import { CreatedUserReturn, CreateUserParams } from "../types/user-params";

export abstract class ICreateUserUseCase {
  abstract execute(params: CreateUserParams): Promise<CreatedUserReturn>
}