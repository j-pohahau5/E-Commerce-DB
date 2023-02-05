// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Reader.hasOne(LibraryCard, {
//   foreignKey: 'reader_id',
//   onDelete: 'CASCADE',
// });

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'reader_id',
  onDelete: 'CASCADE',
});
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'reader_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsTo(ProductTag, {
  foreignKey: 'reader_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsTo(ProductTag, {
  foreignKey: 'reader_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
