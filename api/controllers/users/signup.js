const User = require('../../models/user');

module.exports = async ({ body }, reply) => {
  const { emailAddress } = body;
  const newUser = new User({ emailAddress });
  const userRecord = await newUser.save();

  return reply.send({ user: userRecord });
};
