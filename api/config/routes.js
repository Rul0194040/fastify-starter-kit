// Todas las rutas tienen un prefijo /api/v1
// para acceder a ellas a cada url se le tiene
// que agregar ese prefijon

// Controllers
const usersController = require('../controllers/users');

// Json Schemas
const signupSchema = require('../json-schemas/users/signup');
const loginSchema = require('../json-schemas/users/login');

module.exports = (fastify, opts, done) => {
  fastify.route({
    method: 'POST',
    url: '/users/signup',
    schema: signupSchema,
    handler: usersController.signup,
  });

  fastify.route({
    method: 'POST',
    url: '/users/login',
    schema: loginSchema,
    handler: usersController.login,
  }),
    done();
};
