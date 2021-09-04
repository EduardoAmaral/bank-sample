import { INestApplication } from '@nestjs/common';

const setupApplication = async (app: INestApplication) => {
  app.setGlobalPrefix('v1');
  app.listen(3000);
};

export default setupApplication;
