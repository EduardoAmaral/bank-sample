import { INestApplication, ValidationPipe } from '@nestjs/common';

const setupApplication = async (app: INestApplication) => {
  app.setGlobalPrefix('v1');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.listen(3000);
};

export default setupApplication;
