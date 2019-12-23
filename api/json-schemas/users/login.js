module.exports = {
  type: 'object',
  description: 'Iniciar sesión con correo electrónico y password.',
  body: {
    required: ['emailAddress', 'password'],
    properties: {
      emailAddress: { type: 'string' },
      password: { type: 'string' },
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
