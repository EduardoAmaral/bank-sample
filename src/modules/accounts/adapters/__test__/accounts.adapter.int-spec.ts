import { TestingModule } from '@nestjs/testing';
import { EntityManager } from 'typeorm';
import CustomerEntity from '../../../users/adapters/customer.entity';
import Customer from '../../../users/domain/customer';
import createDatabaseTestingModule from '../../../__test__/createDatabaseTestingModule';
import Account from '../../domain/account';
import AccountEntity from '../account.entity';
import AccountsAdapter from '../accounts.adapter';

describe('AccountsAdapter', () => {
  let adapter: AccountsAdapter;
  let entityManager: EntityManager;
  let module: TestingModule;
  let customer: CustomerEntity;

  beforeAll(async () => {
    ({ adapter, entityManager, module } = await createDatabaseTestingModule(
      AccountsAdapter,
    ));

    customer = await entityManager.save(
      CustomerEntity.from(
        new Customer({
          name: 'Maria Silva',
          email: 'maria@mail.com',
          document: '000',
        }),
      ),
    );
  }, 10000);

  afterAll(async () => {
    await module.close();
  });

  describe('create', () => {
    it('persists a new account', async () => {
      const account = new Account({ customer: customer.toCustomer() });
      const result = await adapter.create(account);

      expect(result.id).not.toBeUndefined();
      expect(result.customer).toMatchObject(customer.toCustomer());

      const accounts: AccountEntity[] = await entityManager.find(AccountEntity);

      expect(accounts[0].id).not.toBeUndefined();
      expect(accounts[0].customer).toMatchObject(customer);
    });
  });
});
