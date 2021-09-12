import Customer from '../../../users/domain/customer';
import CustomersService from '../../../users/domain/customers.service';
import AccountsAdapter from '../../adapters/accounts.adapter';
import Account from '../account';
import AccountApplication from '../account-application';
import { AccountsService } from '../accounts.service';

describe('AccountsService', () => {
  let service: AccountsService;
  let customersService: CustomersService;
  let accountsAdapter: AccountsAdapter;

  beforeEach(async () => {
    customersService = new CustomersService(null);
    accountsAdapter = new AccountsAdapter();

    customersService.create = jest.fn();
    accountsAdapter.create = jest.fn();

    service = new AccountsService(customersService, accountsAdapter);
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

    it('creates a new account', async () => {
      const accountApplication = new AccountApplication({
        name: 'Maria Silva',
        document: '1234',
        email: 'maria@mail.com',
      });

      const customer = new Customer({
        id: 'uuid',
        name: accountApplication.name,
        email: accountApplication.email,
        document: accountApplication.document,
      });

      customersService.create = jest.fn().mockResolvedValueOnce(customer);

      await service.create(accountApplication);

      expect(accountsAdapter.create).toHaveBeenCalledWith(
        new Account({
          customer,
        }),
      );
    });
  });
});
