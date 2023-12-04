const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Quota = db.define('Quotas', {
    id_quota: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_sale: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quota_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Fecha_Vencimiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'Quotas',
    timestamps: false,
  });
  
  module.exports = { Quota };