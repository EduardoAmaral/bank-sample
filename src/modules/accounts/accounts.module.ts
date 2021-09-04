import { Module } from '@nestjs/common';
import { AccountsController } from './controllers/accounts.controller';

@Module({
  controllers: [AccountsController],
})
export class AccountsModule {}
