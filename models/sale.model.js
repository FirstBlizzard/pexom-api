const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Sale = db.define(
    'sales',
    {
      id_sale: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_client: {
        type: DataTypes.INTEGER,
      },
      id_user: {
        type: DataTypes.INTEGER,
      },
      voucher_type: {
        type: DataTypes.STRING,
      },
      voucher_serial: {
        type: DataTypes.STRING,
      },
      voucher_num: {
        type: DataTypes.STRING,
      },
      date: {
        type: DataTypes.DATE,
      },
      tax: {
        type: DataTypes.DECIMAL,
      },
      total: {
        type: DataTypes.DECIMAL,
      },
      state: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: 'sales',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  )
  

module.exports = { Sale };
