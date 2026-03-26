import {
  Body,
  Controller,
  Get,
  Header,
  Headers,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import type { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(
    @Body()
    body: LoginDto,
    // @Query()
    // query: any,
    // @Param()
    // param: any
    @Res({ passthrough: true })
    res: Response,
  ) {
    const result = await this.authService.login(body);

    res.cookie('accessToken', result.accessToken);
    res.cookie('refreshToken', result.refreshToken);

    return true;
  }

  @Get('get-info')
  getInfo() {
    return 'user';
  }
}
