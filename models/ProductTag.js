const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

// Through model, allow products to have 
// multiple tags and tags to have many products.
ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // foreign key for product 
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    // foreign key for tag
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
