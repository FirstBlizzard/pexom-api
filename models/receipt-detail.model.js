const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const ReceiptDetail = db.define(
  'receipt_details',
  {
    id_receipt_detail: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_receipt: {
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
  },
  {
    tableName: 'receipt_details',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

module.exports = { ReceiptDetail };
