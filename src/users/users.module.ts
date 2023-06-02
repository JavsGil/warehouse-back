import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controller/users.controller';
import { UsersService } from './services/users.service';
import { User } from './entitys/Users.entity';
import { UsersRepository } from './repository/UsersRepository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService,UsersRepository],
})
export class UsersModule {}
