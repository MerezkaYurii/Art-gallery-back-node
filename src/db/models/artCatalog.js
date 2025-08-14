import { Schema, model } from 'mongoose';

const artCatalogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    thumbnail: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const artCatalogModel = model(
  'artCatalog',
  artCatalogSchema,
  'artCatalog',
);
