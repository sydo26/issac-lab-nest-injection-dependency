import { IUser } from "../entities/user";

export type CreateUserParams = Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>
export type CreatedUserReturn = {
  user: IUser
}