const { Book, Borrower, Borrowing } = require('../models/index');
const bookService = require('./book');

export async function checkIfBookExist(title) {
    try {
        const curentBook = await bookService.getOneBookByTitle(title);
        if(curentBook) {
            if (curentBook.quantity > 0 ){
                console.log("the book is Exist");
            }
            else{
                console.log("the book is Not Exist");
            }
        }
    } catch (error) {
        console.error('Error querying (checkIfBookExist) Borrowing:', error);
    }
}

export async function createNewBorrowering(borrowerId, bookId) {
    try {
        const BORROWERING_MODEL = {
            dueDate: Date.now(),
            borrowerId: borrowerId,
            bookId: bookId,
        };

        try {
            await Borrowing.create(BORROWERING_MODEL);
            console.log('borrowering event crerated');
        } catch (error) {
            return error;
        }
    } catch (error) {
        console.error('Error querying (createNewBorrowering) Borrowing:', error);
    }
};

export async function updateBorrower(id) {
    try {
        const BORROWERING_MODEL = {
            returnedDate: Date.now(),
        };

        try {
            await Borrowing.update(BORROWERING_MODEL, { where: { id: id } });
            console.log('borrowering Updated');

        } catch (error) { }
    } catch (error) {
        console.error('Error querying (updateBorrower) Borrowing:', error);
    }
};

export async function checkOutBook(borrowerId, BookId) {
    try {
        const curentBook = await bookService.getOneBook(BookId);
        if(curentBook) {
            if (curentBook.quantity > 0 ){
                await bookService.UpdateBookQuantity(BookId, curentBook.quantity, "borrow");
                await createNewBorrowering(borrowerId, BookId);
            }
            else{
                console.log("the book is Not Exist");
            }
        }
    } catch (error) {
        console.error('Error querying (checkOutBook) Borrowing:', error);
    }
}

export async function returnBook(id) {
    try {
        updateBorrower(id);
    } catch (error) {
        console.error('Error querying (returnBook) Borrowing:', error);
    }
};




