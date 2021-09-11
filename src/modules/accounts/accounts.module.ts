import { Module } from '@nestjs/common';
import { CustomersModule } from '../users/customers.module';
import { AccountsController } from './controllers/accounts.controller';
import { AccountsService } from './domain/accounts.service';

@Module({
  imports: [CustomersModule],
  controllers: [AccountsController],
  providers: [AccountsService],
})
export class AccountsModule {}
