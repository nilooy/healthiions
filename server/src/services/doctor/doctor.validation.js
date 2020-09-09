const joi = require("@hapi/joi");
const schema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  birthDate: Joi.number().integer().min(1900).max(2050),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] }.required(),
  }),
  address: joi.string().number().min(3).max(100),
  city: Joi.string().number().min(3).max(100),
  tel: Joi.number().min(11).max(15).required(),
  password: Joi.string().number().min(8).max(20).required(),
  bmdcNumber: Joi.string().min(3).max(15).required(),
  photo: Joi.string(),
});
