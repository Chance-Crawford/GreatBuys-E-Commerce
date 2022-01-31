// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Creating the associations between models
// relationships between each model

// Products belongsTo Category
// A category can have many products but a product can only have one
// category. The two functions below both establish that relationship.
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  // named product tags because the alias must be unique.
  // the modelName in ProductTag.js was already set to
  // product_tag, so i added an 's' to these aliases.
  as: 'product_tags',
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'product_tags',
  foreignKey: 'tag_id'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
