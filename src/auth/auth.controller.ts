import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('login')
    async login(@Body() dto: any) {
    return this.auth.login(dto);  
}
}
