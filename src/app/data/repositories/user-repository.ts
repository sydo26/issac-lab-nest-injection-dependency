import { IUser } from "src/app/domain/entities/user";
import { CreateUserParams } from "src/app/domain/types/user-params";

export abstract class IUserRepository {
  abstract createUser(user: CreateUserParams): Promise<IUser>
  abstract findUserByEmail(email: string): Promise<IUser | null>
  abstract findUserById(email: string): Promise<IUser | null>
}