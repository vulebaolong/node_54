import {
  Body,
  Controller,
  Get,
  Header,
  Headers,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import type { Response } from 'express';
import { Public } from 'src/common/decorators/public.decorator';
import { User } from 'src/common/decorators/user.decorator';
import { Role } from 'src/common/decorators/role.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @Public()
  @Role("ADMIN")
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
  @Role("USER")
  getInfo(@User() user) {
    console.log('getInfo', user);
    return 'user';
  }
}
