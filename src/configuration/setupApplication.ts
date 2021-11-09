import { INestApplication, ValidationPipe } from '@nestjs/common';
import { serve, setup } from 'swagger-ui-express';
import openapiDocument from '../docs';

const setupApplication = async (app: INestApplication) => {
  app.use('/api-docs', serve, setup(openapiDocument));
  app.setGlobalPrefix('v1');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.listen(3000);
};

export default setupApplication;
