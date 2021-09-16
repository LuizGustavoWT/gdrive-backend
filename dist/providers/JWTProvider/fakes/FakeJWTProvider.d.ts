import { IJWTProvider } from '../models/IJWTProvider';
export declare class FakeJWTProvider implements IJWTProvider {
    sign(id: string): Promise<string>;
    verify(token: string): Promise<any>;
}
