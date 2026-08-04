const bookItem = require('../models/bookModel');

// Service function to get all book items
async function getAllBooks() {
  return bookItem.find({}).lean({ getters: true });
}
module.exports = {
	getAllBooks
};
