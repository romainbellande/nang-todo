import { User } from '@/entities';
import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from '../user/user.dto';
import { UserService } from '../user/user.service';
import { AccessTokenResponse } from './access-token-response';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Credentials } from './models/credentials';

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @ApiBody({ type: Credentials })
  @ApiResponse({ type: AccessTokenResponse })
  @Post('/login')
  async login(@Request() req): Promise<AccessTokenResponse> {
    return this.authService.login(req.user);
  }

  @Post('/register')
  @ApiResponse({ type: User })
  async register(@Body() userDto: UserDto) {
    return this.authService.register(userDto);
  }
}
