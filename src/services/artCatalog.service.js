import { artCatalogModel } from '../db/models/artCatalog.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';
import { SORT_ORDER } from '../constants/index.js';

export const getArtCatalog = async ({
  page = 1,
  perPage = 8,
  sortOrder = SORT_ORDER.DESC,
  sortBy = 'createdAt',
}) => {
console.log('Sorting by:', sortBy, '| order:', sortOrder);

  const limit = perPage;
  const skip = (page - 1) * perPage;

  const ArtCatalogQuery = artCatalogModel.find();
  const ArtCatalogCount = await artCatalogModel
    .find()
    .merge(ArtCatalogQuery)
    .countDocuments();

  const catalog = await ArtCatalogQuery.skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const paginationData = calculatePaginationData(
    ArtCatalogCount,
    perPage,
    page,
  );

  return {
    data: catalog,
    ...paginationData,
  };
};

export const getArtCatalogById = async (id) => {
  const items = await artCatalogModel.findById(id).lean();
  return items;
};

export const createArtCatalog = async (payload) => {
  const item = await artCatalogModel.create(payload);
  return item;
};
