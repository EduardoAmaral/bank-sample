import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AccountsService } from '../domain/accounts.service';
import CreateAccountDto from './dtos/create.account.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private accountsService: AccountsService) {}

  @Post()
  @HttpCode(202)
  async create(@Body() dto: CreateAccountDto): Promise<void> {
    await this.accountsService.create(dto.toAccountApplication());
  }
}
