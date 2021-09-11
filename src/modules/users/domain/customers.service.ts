import { Injectable } from '@nestjs/common';
import CustomersAdapter from '../adapters/customers.adapter';
import Customer from './customer';

@Injectable()
export default class CustomersService {
  constructor(private customersAdapter: CustomersAdapter) {}

  async create(customer: Customer): Promise<Customer> {
    return this.customersAdapter.create(customer);
  }
}
