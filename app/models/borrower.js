module.exports = Borrowers;

// models/borrower.js
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class Borrower extends Model {}

  Borrower.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    registeredDate: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Borrower',
  });

  return Borrower;
};