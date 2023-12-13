const controller = require('../controllers/book');
const router = require('express').Router();


router.get('/book', async (req, res) => {
    try {
        const books = await controller.getAllBooks();
        res.statusCode(200).json(books);
    } catch (error) {
        console.error('Error getting books:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/book/:id', async (req, res) => {
    try {
        const books = await controller.getOneBook(req.params.id);
        res.statusCode(200).json(books);
    } catch (error) {
        console.error('Error getting books:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/book', async (req, res) => {
    try {
        await controller.createNewBook(req.params.title, req.params.author, req.params.isbn, req.params.quantity, req.params.shelfLocation);
        res.statusCode(200);
    } catch (error) {
        console.error('Error create books:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.PUT('/book/:id', async (req, res) => {
    try {
        await controller.updateBook(req.params.id, req.params.title, req.params.author, req.params.isbn, req.params.quantity, req.params.shelfLocation);
        res.statusCode(200);
    } catch (error) {
        console.error('Error update books:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.delete('/book/:id', async (req, res) => {
    try {
        await controller.deleteBook(req.params.id);
        res.statusCode(200);
    } catch (error) {
        console.error('Error delete books:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/book/:title', async (req, res) => {
    try {
        const books = await controller.getOneBookByTitle(req.params.title);
        res.statusCode(200).json(books);
    } catch (error) {
        console.error('Error getting books:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/book/:author', async (req, res) => {
    try {
        const books = await controller.getOneBookByAuthor(req.params.author);
        res.statusCode(200).json(books);
    } catch (error) {
        console.error('Error getting books:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/book/:isbn', async (req, res) => {
    try {
        const books = await controller.getOneBookByIsbn(req.params.isbn);
        res.statusCode(200).json(books);
    } catch (error) {
        console.error('Error getting books:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});