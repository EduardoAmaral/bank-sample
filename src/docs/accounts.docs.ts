import { OpenAPIV3 } from 'openapi-types';

export const accountsPaths: OpenAPIV3.PathsObject = {
  '/accounts': {
    post: {
      tags: ['Accounts'],
      summary: 'Account creation',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              type: 'object',
              required: ['name', 'document', 'email'],
              properties: {
                name: {
                  type: 'string',
                  description: "Owner's full name",
                },
                document: {
                  type: 'string',
                  description: 'Document of identification (CPF)',
                },
                email: {
                  type: 'string',
                  description: 'Email to contact',
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: 'Account successfully created',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/account',
              },
            },
          },
        },
      },
    },
  },
};

export const accountSchema: OpenAPIV3.SchemaObject = {
  type: 'object',
  required: ['number', 'name', 'document', 'email'],
  properties: {
    number: {
      type: 'number',
      description: 'Identifier number used on transactions',
    },
    name: {
      type: 'string',
      description: "Owner's full name",
    },
    document: {
      type: 'string',
      description: 'Document of identification (CPF)',
    },
    email: {
      type: 'string',
      description: 'Email to contact',
    },
  },
};
