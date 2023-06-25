import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JWT_SECRET_KEY } from 'src/constants';
import { TokenPayload } from 'src/types/common';

@Injectable()
export class JwtStategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_SECRET_KEY
    });
  }

  async validate(payload: TokenPayload) {
    return { ...payload };
  }
}
