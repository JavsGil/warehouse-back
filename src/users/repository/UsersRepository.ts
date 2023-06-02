import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository,FindOneOptions } from 'typeorm';
import { CreateUserDto } from '../dto/CreateUserDto';
import { User } from '../entitys/Users.entity';

@Injectable()
export class UsersRepository {

    constructor(
        @InjectRepository(User) 
        private usersRepository: Repository<User>
    ){}

    getAllUsers(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async findOne(options?: FindOneOptions<User>): Promise<User | undefined> {
        return this.usersRepository.findOne(options);
    }

    async getUserByUsername(email: string): Promise<User> {
        const options: FindOneOptions<User> = { where: { email } };
        return this.findOne(options);
      }
    newUser(userDTO: CreateUserDto): Promise<User> {
        const newUser = new User();
        newUser.email = userDTO.name;
        newUser.contrasena = userDTO.clave;
        return this.usersRepository.save(newUser);
    }
    getUserDetails(id: number): Promise<User> {
        return this.usersRepository.findOneBy({id:id});
      }

    deleteUser(id: string): Promise<DeleteResult> {
        return this.usersRepository.delete(id);
    }

}
