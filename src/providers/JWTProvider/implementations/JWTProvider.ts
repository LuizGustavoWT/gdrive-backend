import { IJWTProvider } from '../models/IJWTProvider';
import { sign, verify, JwtPayload } from 'jsonwebtoken';

export class JWTProvider implements IJWTProvider {
  async sign(id: string): Promise<string> {
    return sign({}, process.env.JWT_SECRET, { subject: id, expiresIn: '1h' });
  }

  async verify(token: string): Promise<JwtPayload | string> {
    return verify(token, process.env.JWT_SECRET);
  }
}
