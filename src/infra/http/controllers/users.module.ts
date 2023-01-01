import { Module } from "@nestjs/common";
import { IUserRepository } from "src/app/data/repositories/user-repository";
import { DbCreateUserUseCase } from "src/app/data/usecases/db-create-user";
import { ICreateUserUseCase } from "src/app/domain/usecases/create-user";
import { DatabaseModule } from "src/infra/database/database.module";
import { PrismaUserRepository } from "src/infra/database/prisma/repositories/prisma.user.repository";
import { UsersController } from "./users.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    {
      provide: IUserRepository,
      useClass: PrismaUserRepository
    },
    {
      provide: ICreateUserUseCase,
      useClass: DbCreateUserUseCase
    }
  ]
})
export class UsersModule {}