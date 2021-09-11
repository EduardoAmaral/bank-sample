import { AbstractRepository, EntityRepository } from 'typeorm';
import Customer from '../domain/customer';
import CustomerEntity from './customer.entity';

@EntityRepository(CustomerEntity)
export default class CustomersAdapter extends AbstractRepository<CustomerEntity> {
  async create(customer: Customer): Promise<Customer> {
    return (
      await this.repository.save(CustomerEntity.from(customer))
    ).toCustomer();
  }
}
