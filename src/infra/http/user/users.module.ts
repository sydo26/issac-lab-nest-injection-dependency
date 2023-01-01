import { Module } from "@nestjs/common";
import { IUserRepository } from "src/app/data/repositories/user-repository";
import { DbCreateUserUseCase } from "src/app/data/usecases/db-create-user";
import { ICreateUserUseCase } from "src/app/domain/usecases/create-user";
import { DatabaseModule } from "src/infra/database/database.module";
import { PrismaUserRepository } from "src/infra/database/prisma/repositories/prisma.user.repository";
import { UsersController } from "./users.controller";

// exemplo com classes abstratas
// @Module({
//   imports: [DatabaseModule],
//   controllers: [UsersController],
//   providers: [
//     {
//       provide: IUserRepository,
//       useClass: PrismaUserRepository
//     },
//     {
//       provide: ICreateUserUseCase,
//       useClass: DbCreateUserUseCase
//     }
//   ]
// })
// export class UsersModule {}

// exemplo com interfaces
@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    {
      provide: 'USER_REPOSITORY',
      useClass: PrismaUserRepository
    },
    {
      provide: 'CREATE_USER_USE_CASE',
      useClass: DbCreateUserUseCase
    }
  ]
})
export class UsersModule {}