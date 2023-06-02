import { Module } from "@nestjs/common"
import { UsersModule } from "../users/users.module";
import { AuthService } from "./auth.service"
import { PassportModule } from "@nestjs/passport"
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UsersService } from "../users/services/users.service";
import { LocalStrategy } from './local.auth';
import { User } from "src/users/entitys/Users.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersRepository } from "src/users/repository/UsersRepository";


@Module({
    imports: [
      UsersModule,
      PassportModule,
      JwtModule.register({
        secret: 'secretKey',
        signOptions: { expiresIn: '60s' },
      }),
      TypeOrmModule.forFeature([User]),
    ],
    providers: [AuthService,UsersService,UsersRepository, LocalStrategy],
    controllers: [AuthController],
  })
  export class AuthModule {}
