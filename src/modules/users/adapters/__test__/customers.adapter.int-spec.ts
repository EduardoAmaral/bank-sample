import { TestingModule } from '@nestjs/testing';
import { EntityManager } from 'typeorm';
import createDatabaseTestingModule from '../../../__test__/createDatabaseTestingModule';
import Customer from '../../domain/customer';
import CustomerEntity from '../customer.entity';
import CustomersAdapter from '../customers.adapter';

describe('CustomersAdapter', () => {
  let adapter: CustomersAdapter;
  let entityManager: EntityManager;
  let module: TestingModule;

  beforeAll(async () => {
    ({ module, entityManager, adapter } = await createDatabaseTestingModule(
      CustomersAdapter,
    ));
  }, 10000);

  beforeEach(() => {
    entityManager.clear(CustomerEntity);
  });

  afterAll(async () => {
    await module.close();
  });

  describe('create', () => {
    it('persists a new Customer', async () => {
      await adapter.create(
        new Customer({
          name: 'Maria Silva',
          email: 'maria.silva@mail.com',
          document: '999999999',
        }),
      );

      const savedCustomer = await entityManager.findOne(CustomerEntity);

      expect(savedCustomer.id).not.toBeNull;
      expect(savedCustomer.id).not.toBeUndefined;
      expect(savedCustomer.name).toEqual('Maria Silva');
      expect(savedCustomer.email).toEqual('maria.silva@mail.com');
      expect(savedCustomer.document).toEqual('999999999');
    });
  });
});
