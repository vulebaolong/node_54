import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'example@gmail.com' })
  @IsNotEmpty({})
  @IsEmail(undefined, { message: 'Email sài rùi' })
  email!: string;

  @ApiProperty({ example: 'Example@123' })
  @IsNotEmpty()
  password!: string;

  @ApiProperty({ example: '123456' })
  @IsOptional()
  @IsString()
  token?: string;
}
