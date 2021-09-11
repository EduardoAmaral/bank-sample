import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';

const createDatabaseTestingModule = async (
  adapter: any,
): Promise<{
  module: TestingModule;
  entityManager: EntityManager;
  adapter: any;
}> => {
  const module = await Test.createTestingModule({
    imports: [
      ConfigModule.forRoot({ envFilePath: globalThis.ENV_FILE }),
      TypeOrmModule.forRoot(),
      TypeOrmModule.forFeature([adapter]),
    ],
  }).compile();

  return {
    module,
    adapter: module.get(adapter),
    entityManager: module.get(EntityManager),
  };
};

export default createDatabaseTestingModule;
