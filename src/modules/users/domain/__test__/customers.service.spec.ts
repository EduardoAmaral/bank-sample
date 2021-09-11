import CustomersAdapter from '../../adapters/customers.adapter';
import Customer from '../customer';
import CustomersService from '../customers.service';

describe('CustomersService', () => {
  let service: CustomersService;
  let customersAdaper: CustomersAdapter;

  beforeAll(() => {
    customersAdaper = new CustomersAdapter();

    customersAdaper.create = jest.fn();

    service = new CustomersService(customersAdaper);
  });

  describe('create', () => {
    it('calls adapter to create a customer', async () => {
      const customer = new Customer({
        name: 'Maria Silva',
        email: 'maria.silva@mail.com',
        document: '00088899900',
      });

      await service.create(customer);

      expect(customersAdaper.create).toHaveBeenCalledWith(customer);
    });
  });
});
