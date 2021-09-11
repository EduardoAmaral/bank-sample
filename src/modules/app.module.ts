import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsModule } from './accounts/accounts.module';
import { CustomersModule } from './users/customers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: globalThis.ENV_FILE || 'environments/.env',
    }),
    TypeOrmModule.forRoot(),
    AccountsModule,
    CustomersModule,
  ],
})
export class AppModule {}
