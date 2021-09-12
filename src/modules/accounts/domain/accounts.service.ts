import { Injectable } from '@nestjs/common';
import Customer from '../../users/domain/customer';
import CustomersService from '../../users/domain/customers.service';
import AccountsAdapter from '../adapters/accounts.adapter';
import Account from './account';
import AccountApplication from './account-application';

@Injectable()
export class AccountsService {
  constructor(
    private customersService: CustomersService,
    private accountsAdapter: AccountsAdapter,
  ) {}

  async create(accountApplication: AccountApplication): Promise<void> {
    const customer = await this.customersService.create(
      new Customer({
        name: accountApplication.name,
        email: accountApplication.email,
        document: accountApplication.document,
      }),
    );

    await this.accountsAdapter.create(new Account({ customer }));
  }
}
