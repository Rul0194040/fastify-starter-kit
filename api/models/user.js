const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  emailAddress: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', UserSchema);
