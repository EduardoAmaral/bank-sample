import { AbstractRepository, EntityRepository } from 'typeorm';
import BusinessException from '../../../exceptions/business.exception';
import Customer from '../domain/customer';
import CustomerEntity from './customer.entity';

@EntityRepository(CustomerEntity)
export default class CustomersAdapter extends AbstractRepository<CustomerEntity> {
  async create(customer: Customer): Promise<Customer> {
    try {
      return (
        await this.repository.save(CustomerEntity.from(customer))
      ).toCustomer();
    } catch (exception) {
      if (exception.code && exception.code === 'ER_DUP_ENTRY') {
        throw new BusinessException('Document or email is already in use');
      }
      throw exception;
    }
  }
}
