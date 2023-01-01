import { IUser } from "src/app/domain/entities/user";
import { CreateUserParams } from "src/app/domain/types/user-params";

export interface IUserRepository {
  createUser(user: CreateUserParams): Promise<IUser>
  findUserByEmail(email: string): Promise<IUser | null>
  findUserById(email: string): Promise<IUser | null>
}