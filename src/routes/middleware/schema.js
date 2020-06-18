const { Joi } = require("celebrate");

module.exports = {
  userRegisterSchema: Joi.object().keys({
    username: Joi.string().min(1).required(),
    password: Joi.string().min(1).optional(),
    faceTemplate: Joi.string().min(1).optional(),
  }),
};
