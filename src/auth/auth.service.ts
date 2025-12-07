import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwt: JwtService) {}

  async login(email: string, password: string) {
    if (email !== 'admin@askme.com' || password !== '123') {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const token = this.jwt.sign({ email, role: 'admin' });

    return { token };
  }
}
