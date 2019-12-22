// Todas las rutas tienen un prefijo /api/v1
// para acceder a ellas a cada url se le tiene
// que agregar ese prefijo

// Controllers
const usersController = require('../controllers/users');

module.exports = (fastify, opts, done) => {
  fastify.route({
    method: 'POST',
    url: '/users/signup',
    handler: usersController.signup,
  });

  done();
};
