import { Injectable } from "@nestjs/common";
import { IUserRepository } from "src/app/data/repositories/user-repository";
import { IUser } from "src/app/domain/entities/user";
import { CreateUserParams } from "src/app/domain/types/user-params";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaUserRepository implements IUserRepository {
  constructor(
    private readonly prismaService: PrismaService
  ) {}

  async createUser(user: CreateUserParams): Promise<IUser> {
    const createdUser = await this.prismaService.user.create({
      data: user
    })

    return createdUser
  }
  findUserByEmail(email: string): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
  findUserById(email: string): Promise<IUser> {
    throw new Error("Method not implemented.");
  }

}