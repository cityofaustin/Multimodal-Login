const { Joi } = require("celebrate");

module.exports = {
  userRegisterSchema: Joi.object()
    .keys({
      client_id: Joi.string().optional().allow(""),
      response_type: Joi.string().optional().allow(""),
      redirect_url: Joi.string().optional().allow(""),
      scope: Joi.string().optional().allow(""),
      state: Joi.string().optional().allow(""),
      username: Joi.string().min(1),
      email: Joi.string().min(1),
      password: Joi.string().min(1).optional(),
      palmTemplate: Joi.string().min(1).optional(),
      phoneNumber: Joi.string().min(1).optional(),
      text: Joi.string().min(1).optional(),
      publicEncryptionKey: Joi.string().min(1).optional(),
      publicAddress: Joi.string().min(1).optional(),
      signature: Joi.string().min(1).optional(),
      securityQuestions: Joi.string().optional().allow(""),
      // Joi.array()
      //   .items(
      //     Joi.object().keys({
      //       question: Joi.string().required(),
      //       answer: Joi.string().required(),
      //     })
      //   )
      //   .length(3)
      //   .optional(),
      faceTemplate: Joi.string().min(1).optional(),
    })
    .or("username", "email"),
};
