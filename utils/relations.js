const { Category } = require('../models/category.model');
const { Person } = require('../models/person.model');
const { Product } = require('../models/product.model');
const { Quota } = require('../models/quota.model');
const { ReceiptDetail } = require('../models/receipt-detail.model');
const { Receipt } = require('../models/receipt.model');
const { Role } = require('../models/role.model');
const { SaleDetail } = require('../models/sale-detail.model');
const { Sale } = require('../models/sale.model');
const { User } = require('../models/user.model');

const loadAssociations = () => {
  // Role Model
  Role.hasMany(User, {
    foreignKey: 'id_user',
  });
  User.belongsTo(Role, {
    foreignKey: 'id_user',
  });

  // User Model
  User.hasMany(Sale, {
    foreignKey: 'id_sale',
  });
  Sale.belongsTo(User, {
    foreignKey: 'id_sale',
  });
  User.hasMany(Receipt, {
    foreignKey: 'id_receipt',
  });
  Receipt.belongsTo(User, {
    foreignKey: 'id_receipt',
  });

  // Sale Model
  Sale.hasMany(SaleDetail, {
    foreignKey: 'id_sale_detail',
  });
  SaleDetail.belongsTo(Sale, {
    foreignKey: 'id_sale_detail',
  });
  Sale.hasMany(Quota, {
    foreignKey: 'id_quota',
  });
  Quota.belongsTo(Sale, {
    foreignKey: 'id_quota',
  });

  // Receipt Model
  Receipt.hasMany(ReceiptDetail, {
    foreignKey: 'id_receipt_detail',
  });
  ReceiptDetail.belongsTo(Receipt, {
    foreignKey: 'id_receipt_detail',
  });

  // People Model
  Person.hasMany(Receipt, {
    foreignKey: 'id_provider',
    sourceKey: 'id_person',
  });
  Receipt.belongsTo(Person, {
    foreignKey: 'id_provider',
    targetKey: 'id_person',
  });
  Person.hasMany(Sale, {
    foreignKey: 'id_client',
    sourceKey: 'id_person',
  });
  Sale.belongsTo(Person, {
    foreignKey: 'id_client',
    targetKey: 'id_person',
  });

  // Product Model
  Product.hasMany(ReceiptDetail, {
    foreignKey: 'id_product',
  });
  ReceiptDetail.belongsTo(Product, {
    foreignKey: 'id_product',
  });
  Product.hasMany(SaleDetail, {
    foreignKey: 'id_product',
  });
  SaleDetail.belongsTo(Product, {
    foreignKey: 'id_product',
  });

  // Category Model
  Category.hasMany(Product, {
    foreignKey: 'id_sale_detail',
  });
  Product.belongsTo(Category, {
    foreignKey: 'id_sale_detail',
  });
};


module.exports = { loadAssociations }