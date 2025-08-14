import { Router } from 'express';

import {
  createArtCatalogController,
  getArtCatalogByIdController,
  getArtCatalogController,
} from '../controllers/artCaralog.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createArtCaralogShema } from '../validation/artCaralog.js';
import { isValidId } from '../middlewares/isValidId.js';

const artCatalogRouter = Router();
artCatalogRouter.get(
  '/catalog',
  isValidId,
  ctrlWrapper(getArtCatalogController),
);

artCatalogRouter.get('/catalog/:id', ctrlWrapper(getArtCatalogByIdController));
artCatalogRouter.post(
  '/catalog',
  validateBody(createArtCaralogShema),
  ctrlWrapper(createArtCatalogController),
);

export default artCatalogRouter;
