import Customer from '../../../users/domain/customer';
import CustomersService from '../../../users/domain/customers.service';
import AccountApplication from '../account-application';
import { AccountsService } from '../accounts.service';

describe('AccountsService', () => {
  let service: AccountsService;
  let customersService: CustomersService;

  beforeEach(async () => {
    customersService = new CustomersService(null);

    customersService.create = jest.fn();

    service = new AccountsService(customersService);
  });

  describe('create', () => {
    it('creates a new customer', async () => {
      const accountApplication = new AccountApplication({
        name: 'Maria Silva',
        document: '1234',
        email: 'maria@mail.com',
      });

      await service.create(accountApplication);

      expect(customersService.create).toHaveBeenCalledWith(
        new Customer({
          name: 'Maria Silva',
          document: '1234',
          email: 'maria@mail.com',
        }),
      );
    });
  });
});
