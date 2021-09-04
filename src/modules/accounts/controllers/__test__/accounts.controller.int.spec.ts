import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import setupApplication from '../../../../configuration/setupApplication';
import * as request from 'supertest';
import { AccountsController } from '../accounts.controller';

describe('AccountController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [AccountsController],
    }).compile();

    app = moduleFixture.createNestApplication();
    await setupApplication(app);
    await app.init();
  });

  afterAll(async () => {
    app.close();
  });

  it('/POST creates an account', async () => {
    return request(app.getHttpServer())
      .post('/v1/accounts')
      .send({
        name: 'Maria Silva',
        document: '00000000000',
        email: 'maria.silva@mail.com',
      })
      .then((response) => {
        expect(response.status).toEqual(201);
      });
  });
});
