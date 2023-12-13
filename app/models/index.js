const db = require('../util/database');
const { Sequelize } = require('sequelize');
const BookModel = require('./book');
const BorrowerModel = require('./borrower');
const BorrowingModel = require('./borrowing');

const sequelize = new Sequelize(db);

const Book = BookModel(sequelize);
const Borrower = BorrowerModel(sequelize);
const Borrowing = BorrowingModel(sequelize);

// Associations
Borrowing.belongsTo(Book, { foreignKey: 'bookId' });
Borrowing.belongsTo(Borrower, { foreignKey: 'borrowerId' });

Book.hasMany(Borrowing);
Borrower.hasMany(Borrowing);

module.exports = {
  Book,
  Borrower,
  Borrowing,
  sequelize,
};