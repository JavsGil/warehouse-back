import { Injectable } from '@nestjs/common';
import { User } from '../entitys/Users.entity';
import { UsersRepository } from '../repository/UsersRepository';
import { CreateUserDto } from '../dto/CreateUserDto';
@Injectable()
export class UsersService {

    constructor(private usersRepository: UsersRepository) {}

    async getAllUsers(): Promise<User[]> {
        return this.usersRepository.getAllUsers();
    }


    async newUser(userDTO: CreateUserDto): Promise<User> {
        return this.usersRepository.newUser(userDTO);
    }

    async getUserByUsername(email: string): Promise<User> {
        return this.usersRepository.getUserByUsername(email);
      }

      async getUserDetails(id: number): Promise<User> {
        const userDetails = await this.usersRepository.getUserDetails(id);
        return userDetails;
      }

    async deleteUser(id: string): Promise<void> {
        await this.usersRepository.deleteUser(id);
    }
}
