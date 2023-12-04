const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const User = db.define(
  'users',
  {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_rol: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
    document_type: {
      type: DataTypes.STRING,
    },
    document_num: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    cellphone: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: 'users',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

module.exports = { User };
