const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Person = db.define(
  'people',
  {
    id_person: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    person_type: {
      type: DataTypes.STRING,
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
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'people',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

module.exports = { Person };
