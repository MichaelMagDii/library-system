const { Borrower } = require('../models/index');


export async function getAllBorrowers() {
    try {
        const borrower = await Borrower.findAll();
        borrower.forEach(borrower => {
            console.log(borrower);
        });
    } catch (error) {
        console.error('Error querying (getAllBorrowers) Borrower:', error);
    }
}

export async function getOneBorrower(id) {
    try {
        const borrower = await Borrower.findByPk(id);
        return borrower;
    } catch (error) {
        console.error('Error querying (getOneBorrower) Borrower:', error);
    }
}

export async function createNewBorrower(name, email, registeredDate) {
    try {
        
        const BORROWER_MODEL = {
            name: name,
            email: email,
            registeredDate: registeredDate,
        };

        try {
            await Borrower.create(BORROWER_MODEL);
            console.log('borrower crerated');
        } catch (error) {
            return error;
        }
    } catch (error) {
        console.error('Error querying (createNewBorrower) borrower:', error);
    }
};

export async function updateBorrower(id, name, email, registeredDate) {
    try {
        const BORROWER_MODEL = {
            name: name,
            email: email,
            registeredDate: registeredDate,
        };

        try {
            const borrower = await Borrower.update(BORROWER_MODEL, { where: { id: id } });
            console.log('borrower Updated', borrower);

        } catch (error) { }
    } catch (error) {
        console.error('Error querying (updateBorrower) borrower:', error);
    }
};

export async function deleteBorrower (id) {
    try {
        await Borrower.destroy({ where: { id: id } });
        console.log('Borrower deleted');
    } catch (error) {
        console.error('Error querying (deleteBorrower) Borrower:', error);
    }
};

