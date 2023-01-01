import { CreatedUserReturn, CreateUserParams } from "../types/user-params";

export interface ICreateUserUseCase {
  execute(params: CreateUserParams): Promise<CreatedUserReturn>
}