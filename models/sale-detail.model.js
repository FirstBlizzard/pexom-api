const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const SaleDetail = db.define(
  'sale_details',
  {
    id_sale_detail: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_sale: {
      type: DataTypes.INTEGER,
    },
    id_product: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.DECIMAL,
    },
    discount: {
      type: DataTypes.DECIMAL,
    },
  },
  {
    tableName: 'sale_details',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

module.exports = { SaleDetail };
