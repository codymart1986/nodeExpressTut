const mongoose = require('mongoose')
const Joi = require('joi')
const { productSchema } = require('./products')

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 5, maxLength: 50 },
  email: { type: String, unique: true, required: true, minLength: 5, maxLength: 255 },
  password: {type: String, required: true, maxLength: 1024, minLength: 5 },
  isGoldMember: { type: String, default: false },
  shoppingCart: { type: [productSchema], default: [] },
})

const User = mongoose.model('User', userSchema)

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required(),
  })
  return schema.validate(user)
}

exports.User = User;
exports.validate = validateUser;