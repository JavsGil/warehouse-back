import { Strategy } from 'passport-local';
import {  ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import {randomBytes} from 'crypto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
   
  constructor(private authService: AuthService) {
    const secretKey = randomBytes(32).toString('hex');
    super({
      usernameField: 'admin@gmail.com',
      passwordField: 'admin', 
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: secretKey, // Reemplaza con tu clave secreta
    });
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}