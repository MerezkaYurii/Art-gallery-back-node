import createHttpError from 'http-errors';
import {
  createArtCatalog,
  getArtCatalog,
  getArtCatalogById,
} from '../services/artCatalog.service.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';

export const getArtCatalogController = async (req, res, next) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const catalog = await getArtCatalog({
    page,
    perPage,
    sortBy,
    sortOrder,
  });

  res.status(200).json({
    status: 200,
    message: 'Successfully found catalog!',
    data: catalog,
  });
};

export const getArtCatalogByIdController = async (req, res) => {
  const { id } = req.params;
  const painting = await getArtCatalogById(id);

  // Відповідь, якщо контакт не знайдено
  if (!painting) {
    throw createHttpError('Painting not found');
  }
  // Відповідь, якщо контакт знайдено
  res.status(200).json({
    status: 200,
    message: `Successfully found ainting with id ${id}!`,
    data: painting,
  });
};

export const createArtCatalogController = async (req, res) => {
  const painting = await createArtCatalog(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a painting!`,
    data: painting,
  });
};
