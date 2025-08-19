import express from 'express';
// import pino from 'pino-http';
import cors from 'cors';
import { getEnvVar } from './utils/getEnvVar.js';
import artCatalogRouter from './routers/artCaralog.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  // app.use(
  //   pino({
  //     transport: {
  //       target: 'pino-pretty',
  //     },
  //   }),
  // );

  app.use(artCatalogRouter);

  app.use(notFoundHandler);

  app.use(errorHandler);
  const PORT = Number(getEnvVar('PORT')) || 4000;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
