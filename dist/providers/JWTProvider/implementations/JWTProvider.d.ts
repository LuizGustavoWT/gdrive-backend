import { IJWTProvider } from '../models/IJWTProvider';
import { JwtPayload } from 'jsonwebtoken';
export declare class JWTProvider implements IJWTProvider {
    sign(id: string): Promise<string>;
    verify(token: string): Promise<JwtPayload | string>;
}
