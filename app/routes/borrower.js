const controller = require('../controllers/borrower');
const router = require('express').Router();


router.get('/borrower', async (req, res) => {
    try {
        const borrower = await controller.getAllBorrowers();
        res.statusCode(200).json(borrower);
    } catch (error) {
        console.error('Error getting borrower:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/borrower/:id', async (req, res) => {
    try {
        const borrower = await controller.getOneBorrower(req.params.id);
        res.statusCode(200).json(borrower);
    } catch (error) {
        console.error('Error getting borrower:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/borrower/', async (req, res) => {
    try {
        await controller.createNewBorrower(req.params.name, req.params.email, req.params.registeredDate);
        res.statusCode(200);
    } catch (error) {
        console.error('Error create borrower:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.PUT('/borrower/:id', async (req, res) => {
    try {
        await controller.updateBorrower(req.params.name, req.params.email, req.params.registeredDate);
        res.statusCode(200);
    } catch (error) {
        console.error('Error update borrower:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.delete('/borrower/:id', async (req, res) => {
    try {
        await controller.deleteBorrower(req.params.id);
        res.statusCode(200);
    } catch (error) {
        console.error('Error delete borrower:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});