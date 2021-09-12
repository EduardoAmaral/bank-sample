import { TestingModule } from '@nestjs/testing';
import { EntityManager } from 'typeorm';
import BusinessException from '../../../../exceptions/business.exception';
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

  beforeEach(async () => {
    await entityManager
      .createQueryBuilder()
      .delete()
      .from(CustomerEntity)
      .execute();
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

    it('throws BusinessExpection when document is already in use', async () => {
      const customer = new Customer({
        document: '1',
        name: 'Maria Silva',
        email: 'maria@mail.com',
      });

      await entityManager.save(CustomerEntity.from(customer));

      await expect(
        adapter.create({ ...customer, email: 'another@mail.com' }),
      ).rejects.toThrowError(
        new BusinessException('Document or email is already in use'),
      );
    });

    it('throws BusinessExpection when email is already in use', async () => {
      const customer = new Customer({
        document: '1',
        name: 'Maria Silva',
        email: 'maria@mail.com',
      });

      await entityManager.save(CustomerEntity.from(customer));

      await expect(
        adapter.create({ ...customer, document: '2' }),
      ).rejects.toThrowError(
        new BusinessException('Document or email is already in use'),
      );
    });
  });
});
