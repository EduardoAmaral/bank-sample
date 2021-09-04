import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import setupApplication from '../../../../configuration/setupApplication';
import * as request from 'supertest';
import { AccountsController } from '../accounts.controller';
import { AccountsService } from '../../domain/accounts.service';

describe('AccountController', () => {
  let app: INestApplication;
  const AccountsServiceMock = AccountsService as jest.MockedClass<
    typeof AccountsService
  >;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [AccountsController],
      providers: [AccountsServiceMock],
    }).compile();

    app = moduleFixture.createNestApplication();
    await setupApplication(app);
    await app.init();
  });

  afterAll(async () => {
    app.close();
  });

  it('/POST creates an account', async () => {
    const mockedCreate = jest.fn();
    AccountsServiceMock.prototype.create = mockedCreate;

    return request(app.getHttpServer())
      .post('/v1/accounts')
      .send({
        name: 'Maria Silva',
        document: '00000000000',
        email: 'maria.silva@mail.com',
      })
      .then((response) => {
        expect(response.status).toEqual(201);
        expect(mockedCreate).toHaveBeenCalledWith({
          name: 'Maria Silva',
          document: '00000000000',
          email: 'maria.silva@mail.com',
        });
      });
  });
});
