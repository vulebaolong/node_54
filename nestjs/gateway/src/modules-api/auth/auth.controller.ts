import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
import { Public } from 'src/common/decorators/public.decorator';
import { Role } from 'src/common/decorators/role.decorator';
import { User } from 'src/common/decorators/user.decorator';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @Public()
  @Role('ADMIN')
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

    if (result?.isTotp) {
      console.log(123);
      return { isTotp: true };
    } else {
      res.cookie('accessToken', result.accessToken);
      res.cookie('refreshToken', result.refreshToken);

      return true;
    }
  }

  @Get('get-info')
  @Role('USER')
  getInfo(@User() user) {
    // console.log('getInfo', user);
    if (user.totpSecret) {
      user.isTotp = true;
    }
    return user;
  }

  @Post('refresh-token')
  @Public()
  async refreshToken(
    @Req()
    req: Request,
    @Res({ passthrough: true })
    res: Response,
  ) {
    const result = await this.authService.refreshToken(req);

    res.cookie('accessToken', result.accessToken);
    res.cookie('refreshToken', result.refreshToken);

    return true;
  }
}
