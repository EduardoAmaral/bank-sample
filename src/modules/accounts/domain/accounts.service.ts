import { Injectable } from '@nestjs/common';
import Customer from '../../users/domain/customer';
import CustomersService from '../../users/domain/customers.service';
import AccountApplication from './account-application';

@Injectable()
export class AccountsService {
  constructor(private customersService: CustomersService) {}

  async create(accountApplication: AccountApplication): Promise<void> {
    await this.customersService.create(
      new Customer({
        name: accountApplication.name,
        email: accountApplication.email,
        document: accountApplication.document,
      }),
    );
  }
}
