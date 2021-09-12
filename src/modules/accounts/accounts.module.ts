import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from '../users/customers.module';
import AccountsAdapter from './adapters/accounts.adapter';
import { AccountsController } from './controllers/accounts.controller';
import { AccountsService } from './domain/accounts.service';

@Module({
  imports: [CustomersModule, TypeOrmModule.forFeature([AccountsAdapter])],
  controllers: [AccountsController],
  providers: [AccountsService],
})
export class AccountsModule {}
