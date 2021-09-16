import { Module } from '@nestjs/common';
import { BCryptHashProvider } from './implementations/BCryptHashProvider';
import { IHashProvider } from './models/IHashProvider';

@Module({
  providers: [{ provide: IHashProvider, useClass: BCryptHashProvider }],
  exports: [{ provide: IHashProvider, useClass: BCryptHashProvider }],
})
export class HashModule {}
