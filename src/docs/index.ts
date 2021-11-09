import { OpenAPIV3 } from 'openapi-types';
import { accountSchema, accountsPaths } from './accounts.docs';

const openapiDocument: OpenAPIV3.Document = {
  openapi: '3.0.1',
  info: {
    description: 'A sample API to handle account transfer between banks',
    version: '0.0.1',
    title: 'Bank API',
  },
  servers: [
    {
      url: '/v1',
    },
  ],
  paths: {
    ...accountsPaths,
  },
  components: {
    schemas: {
      account: accountSchema,
    },
  },
};

export default openapiDocument;
