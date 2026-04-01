import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({})
  @IsEmail(undefined, { message: 'Email sài rùi' })
  email: string;

  @IsNotEmpty()
  password: string;

  @IsOptional()
  @IsString()
  token?: string;
}
