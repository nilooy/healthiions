const Joi = require("@hapi/joi");

const schema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  birthDate: Joi.string().min(3).max(8).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  address: Joi.string().number().min(3).max(100),
  city: Joi.string().number().min(3).max(100),
  tel: Joi.number().min(11).max(14).required(),
  gender: Joi.string().required(),
  bloodGroup: Joi.string().required(),
  nidNumber: Joi.number().min(3).max(15),
  password: Joi.string().number().min(8).max(20).require(),
  photo: Joi.string,
});
