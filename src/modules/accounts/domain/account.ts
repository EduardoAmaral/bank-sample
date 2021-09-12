import Customer from '../../users/domain/customer';

export default class Account {
  id: string;

  customer: Customer;

  constructor(account: { id?: string; customer: Customer }) {
    this.id = account.id;
    this.customer = account.customer;
  }
}
