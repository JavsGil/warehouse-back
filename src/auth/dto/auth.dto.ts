import {  ApiProperty } from '@nestjs/swagger';

export class AuthtDto {
  @ApiProperty({
    example: 'example@gmail.com',
  })
  email: string;

  @ApiProperty({
    example: 'password123',
  })
  password: string;
}