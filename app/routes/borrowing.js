const controller = require('../controllers/borrowing');
const router = require('express').Router();


router.post('/CheckOut', async (req, res) => {
    try {
        await controller.checkOutBook();
        res.statusCode(200);
    } catch (error) {
        console.error('Error getting books:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/return/:id', async (req, res) => {
    try {
        await controller.returnBook(req.params.id);
        res.statusCode(200);
    } catch (error) {
        console.error('Error getting books:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/check/:title', async (req, res) => {
    try {
        await controller.checkIfBookExist(req.params.title);
        res.statusCode(200);
    } catch (error) {
        console.error('Error getting books:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});