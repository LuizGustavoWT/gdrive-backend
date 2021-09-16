import { Module } from '@nestjs/common';
import { JWTProvider } from './implementations/JWTProvider';
import { IJWTProvider } from './models/IJWTProvider';

@Module({
  providers: [{ provide: IJWTProvider, useClass: JWTProvider }],
  exports: [{ provide: IJWTProvider, useClass: JWTProvider }],
})
export class JWTModule {}
