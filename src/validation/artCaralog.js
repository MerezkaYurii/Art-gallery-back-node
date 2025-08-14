import Joi from 'joi';

export const createArtCaralogShema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
  thumbnail: Joi.string().required(),
});
