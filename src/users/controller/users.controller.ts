import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { User } from '../entitys/Users.entity';
import { CreateUserDto } from '../dto/CreateUserDto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }


  @Post()
  createUser(@Body('name') name: CreateUserDto): Promise<User> {
    return this.usersService.newUser(name);
  }

//   @Put(':id')
//   updateUser(@Param('id') id: string, @Body('name') name: string): Promise<User> {
//     return this.usersService.updateUser(id, name);
//   }

  @Delete(':id')
  deleteUser(@Param('id') id: string): Promise<void> {
    return this.usersService.deleteUser(id);
  }
}

