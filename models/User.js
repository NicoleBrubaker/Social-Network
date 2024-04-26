const { Schema, model } = require("mongoose");

// Schema to create User model
const userSchema = new Schema(
  {
    first: String,
    last: String,
  })

const User = model('user', userSchema);

module.exports = User;
