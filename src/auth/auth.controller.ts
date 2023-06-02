import { Controller, Request,Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import {AuthtDto } from './dto/auth.dto'

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    async login(@Body()  authtDto: AuthtDto) {
        return this.authService.login(authtDto);
    }
}
