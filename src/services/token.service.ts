import { JwtService } from '@nestjs/jwt';
import { Injectable, Logger } from '@nestjs/common';
import { TokenPayload } from 'src/types/models';
import { EXPIRES_IN, JWT_SECRET_KEY, REFRESH_EXPIRES_IN, JWT_REFRESH_SECRET_KEY } from 'src/constants';

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  async generateAccessToken(payload: TokenPayload) {
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: EXPIRES_IN + 'm',
      secret: JWT_SECRET_KEY
    });

    return accessToken;
  }

  async generateRefreshToken(payload: TokenPayload) {
    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: REFRESH_EXPIRES_IN + 'm',
      secret: JWT_REFRESH_SECRET_KEY
    });

    return refreshToken;
  }

  async generateTokens(payload: TokenPayload) {
    const [token, refreshToken] = await Promise.all([
      this.generateAccessToken(payload),
      this.generateRefreshToken(payload)
    ]);

    return { token, refreshToken };
  }

  async verifyToken(token: string) {
    const payload = await this.jwtService.verify(token, { secret: JWT_SECRET_KEY });
    return payload;
  }
}
