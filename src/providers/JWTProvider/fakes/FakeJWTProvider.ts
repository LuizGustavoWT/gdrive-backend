import { IJWTProvider } from '../models/IJWTProvider';

export class FakeJWTProvider implements IJWTProvider {
  public async sign(id: string): Promise<string> {
    return id;
  }

  public async verify(token: string): Promise<any> {
    return token;
  }
}
