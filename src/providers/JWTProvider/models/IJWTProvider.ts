export abstract class IJWTProvider {
  abstract sign(id: string): Promise<string>;
  abstract verify(token: string): Promise<any>;
}
