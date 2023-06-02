import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UsersService } from '../users/services/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entitys/Users.entity';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private jwtService: JwtService) { }
    async validateUser(username: string, password: string): Promise<User> {
        const user = await this.usersService.getUserByUsername(username);
        if (!user) return null;
        const passwordValid = await bcrypt.compare(password, user.contrasena)
        if (!user) {
            throw new NotAcceptableException('could not find the user');
        }
        if (user && passwordValid) {
            return user;
        }
        return null;
    }
    async login(user: any) {
        const userValid = await this.validateUser(user.email,user.password)
        const payload = { username: user };
        return {
          token: this.jwtService.sign(payload),
          data: userValid,
        };
    }
}
