import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [
    AccountsModule,
    ConfigModule.forRoot({
      envFilePath: globalThis.ENV_FILE || 'environments/.env',
    }),
    TypeOrmModule.forRoot(),
  ],
})
export class AppModule {}
