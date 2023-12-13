module.exports = Books;
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Book extends Model {}

  Book.init({
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    isbn: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    shelfLocation: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Book',
  });

  return Book;
};