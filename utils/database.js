const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const db = new Sequelize({
  dialect: 'postgres',
  port: "5432",
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Puedes necesitar establecer esto en false si estás usando un certificado autofirmado
    },
  },
});

module.exports = { db };