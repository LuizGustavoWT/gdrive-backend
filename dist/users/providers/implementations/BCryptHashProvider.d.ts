import { IHashProvider } from '../models/IHashProvider';
export declare class BCryptHashProvider implements IHashProvider {
    generateHash(payload: string): Promise<string>;
    compareHash(payload: string, hash: string): Promise<boolean>;
}
