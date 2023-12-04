const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Category = db.define(
  'categories',
  {
    id_category: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    estado: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: 'categories',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

module.exports = { Category };
