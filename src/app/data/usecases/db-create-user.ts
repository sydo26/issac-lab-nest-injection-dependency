import { Inject, Injectable } from "@nestjs/common";
import { CreateUserParams, CreatedUserReturn } from "src/app/domain/types/user-params";
import { ICreateUserUseCase } from "src/app/domain/usecases/create-user";
import { IUserRepository } from "../repositories/user-repository";

export class DbCreateUserUseCase implements ICreateUserUseCase {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: IUserRepository
  ) {}

  async execute(params: CreateUserParams): Promise<CreatedUserReturn> {
    const user = await this.userRepository.createUser(params)
    
    return {
      user
    }
  }
}