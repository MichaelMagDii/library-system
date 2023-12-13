const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Borrowing extends Model {}

  Borrowing.init({
    id: DataTypes.INTEGER,
    dueDate: DataTypes.DATE,
    returnedDate: DataTypes.DATE,
    borrowerId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Borrowing',
  });

  return Borrowing;
};