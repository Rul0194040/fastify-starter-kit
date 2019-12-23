module.exports = {
  type: 'object',
  description: 'Crear nuevo usuario.',
  body: {
    required: ['emailAddress', 'password', 'passwordConfirmation'],
    properties: {
      emailAddress: { type: 'string' },
      password: { type: 'string' },
      passwordConfirmation: { type: 'string' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        token: { type: 'string' },
      },
    },
  },
};
