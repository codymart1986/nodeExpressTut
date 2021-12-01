const mongoose = require('mongoose')
const Joi = require('joi')
const { productSchema } = require('./products')

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  isGoldMember: { type: String, default: false },
  shoppingCart: { type: [productSchema], default: [] },
})

const User = mongoose.model('User', userSchema)

const validateUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  })
  return schema.validate(user)
}

exports.User = User
exports.validate = validateUser
