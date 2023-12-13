const { Book } = require('../models/index');


export async function getAllBooks() {
    try {
        const books = await Book.findAll();
        return books.forEach(book => {
            console.log(book.title);
        });
    } catch (error) {
        console.error('Error querying (getAllBooks) books:', error);
    }
}

export async function getOneBook(id) {
    try {
        const book = await Book.findByPk(id);
        return book;
    } catch (error) {
        console.error('Error querying (getOneBook) books:', error);
    }
}

export async function createNewBook(title, author, isbn, quantity, shelfLocation) {
    try {
        
        const BOOK_MODEL = {
            title: title,
            author: author,
            isbn: isbn,
            quantity: quantity,
            shelfLocation: shelfLocation,
        };

        try {
            const book = await Book.create(BOOK_MODEL);
            console.log('book crerated', book);
        } catch (error) {
            return error;
        }
    } catch (error) {
        console.error('Error querying (createNewBook) books:', error);
    }
};

export async function updateBook(id, title, author, isbn, quantity, shelfLocation) {
    try {
        const BOOK_MODEL = {
            title: title,
            author: author,
            isbn: isbn,
            quantity: quantity,
            shelfLocation: shelfLocation,
        };

        try {
            const book = await Book.update(BOOK_MODEL, { where: { id: id } });
            console.log('book Updated', book);

        } catch (error) { }
    } catch (error) {
        console.error('Error querying (updateBook) books:', error);
    }
};

export async function deleteBook (id) {
    try {
        await User.destroy({ where: { id: id } });
        console.log('book deleted');
    } catch (error) {
        console.error('Error querying (deleteBook) books:', error);
    }
};

export async function getOneBookByTitle(title) {
    try {
        const book = await Book.find({ where: { title: title } });
        return book;
    } catch (error) {
        console.error('Error querying (getOneBookByTitle) books:', error);
    }
}

export async function getOneBookByAuthor(author) {
    try {
        const book = await Book.find({ where: { author: author } });
        return book;
    } catch (error) {
        console.error('Error querying (getOneBookByAuthor) books:', error);
    }
}

export async function getOneBookByIsbn(isbn) {
    try {
        const book = await Book.find({ where: { isbn: isbn } });
        return book;
    } catch (error) {
        console.error('Error querying (getOneBookByIsbn) books:', error);
    }
}

export async function UpdateBookQuantity(id, quantity, action) {
    try {
        const BOOK_MODEL = {
            quantity: quantity,
        };
        if (action == "borrow"){
            BOOK_MODEL.quantity = BOOK_MODEL.quantity - 1;
        }
        else if (action == "return"){
            BOOK_MODEL.quantity = BOOK_MODEL.quantity + 1;
        }
        try {
            const book = await Book.update(BOOK_MODEL, { where: { id: id } });
            console.log('book quantity Updated', book);

        } catch (error) { }
    } catch (error) {
        console.error('Error querying (updateBook) books:', error);
    }
};

// Example: Use the sequelize instance to perform general queries
async function runQuery() {
    try {
        const result = await sequelize.query('SELECT * FROM Books WHERE quantity > 0');
        console.log(result);
    } catch (error) {
        console.error('Error running query:', error);
    }
}




