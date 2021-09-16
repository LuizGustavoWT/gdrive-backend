import { IHashProvider } from '../models/IHashProvider';
export declare class FakeHashProvider implements IHashProvider {
    generateHash(payload: string): Promise<string>;
    compareHash(payload: string, hashed: string): Promise<boolean>;
}
