const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const key = require("../keys/keys");
const userSchema = new mongoose.Schema({
  firstname: { type: String, minlength: 3 },
  lastname: { type: String, minlength: 3 },
  email: { type: String, minlength: 3 },
  password: { type: String, minlength: 3 },
  dateCreated: { type: Date, default: Date.now }
});
userSchema.methods.genToken = function() {
  const token = jwt.sign({ _id: this._id }, key.privateKey);
  return token;
};
const User = mongoose.model("Users", userSchema);

function validateUser(user) {
  const schema = {
    firstname: joi.string(),
    lastname: joi.string(),
    email: joi
      .string()
      .email()
      .required(),
    password: joi.string().required()
  };
  return joi.validate(user, schema);
}
module.exports = { User, validateUser };
