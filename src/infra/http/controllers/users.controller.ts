import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { ICreateUserUseCase } from "src/app/domain/usecases/create-user";
import { CreateUserDTO } from "../dtos/user.dto";

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserUseCase: ICreateUserUseCase
  ) {}

  @Post()
  async handle(@Body() body: CreateUserDTO) {
    const user = await this.createUserUseCase.execute(body)
    return user
  }

  @Get()
  async findALl() {
    return 'Hello'
  }
}