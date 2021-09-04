import { Body, Controller, Post } from '@nestjs/common';
import CreateAccountDto from './dtos/create.account.dto';

@Controller('accounts')
export class AccountsController {
  @Post()
  create(@Body() dto: CreateAccountDto) {
    return 'Created';
  }
}
