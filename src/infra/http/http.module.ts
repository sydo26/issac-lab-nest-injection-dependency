import { Module } from "@nestjs/common";
import { UsersModule } from "./controllers/users.module";

@Module({
  imports: [UsersModule]
})
export class HttpModule {}