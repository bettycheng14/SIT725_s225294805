// Import the service
const bookService = require('../services/bookService');

// Controller uses the service to get data
exports.getAllBooks = async (req, res) => {
  const items = await bookService.getAllBooks();
  res.json({
    status: 200,
    data: items,
    message: 'Book catalog retrieved using service'
  });
};

exports.getBookById = async (req, res) => {
    const bookId = req.params.id;
    const items = await bookService.getAllBooks();
    const book = items.find(item => item.id === bookId);
    if (book) {
        res.json({
            status: 200,
            data: book,
            message: 'Book details retrieved successfully'
        });
    } else {
        res.status(404).json({
            status: 404,
            message: 'Book not found'
        });
    }
}