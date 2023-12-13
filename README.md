## Table of Contents

- [Table of Contents](#table-of-contents)
- [System Details](#System_Detials)
- [APIs](#apis)
- [App](#app)
- [Setup](#setup)
- [DataBase](#Database)

## System_Detials
    * library system that build by Node.js Express and Sequelize ORM 
    * this system used for any one can check if the library have any specific book and can borrow it and can return it on any time 
    
    
## app
    * 'controller': that contain all services
    * 'modesl': that contain all Database models
    * 'router': that contain all router of http requests 
    * 'util': that contain all utilities to setup database and sequelize 
    
## apis
   * ## Books

    ```
    get => book : this api used for return all books in the library
    get => book/:id : this api used for return specific book in the library by book_id
    post => book : this api used for insert books in the library
    put => book/:id : this api used for update any book details in the library by book_id
    delete => book/:id : this api used for delete book in the library by Book_id
    get => book/:title : this api used for return specific book in the library by title
    get => book/:author : this api used for return specific book in the library by author
    get => book/:isbn : this api used for return specific book in the library by isbn
    ```
    
    
 * ## Borrowers

    ```
    get => borrower : this api used for return borrowers
    get => borrower/:id : this api used for return specific borrower by borrower_id
    post => borrower : this api used for insert borrower
    put => borrower/:id : this api used for update any borrower details by borrower_id
    delete => borrower/:id : this api used for delete borrower by borrower_id
    ```
    
 * ## Borrowing

    ```
    post => CheckOut : this api used check out the book form the library
    post => return/:id : this api used for return book by request id
    post => /check/:title : this api used for check if any book is exist in the library 
    ```

## Setup

* to setup the project you need to run script "setup.sh" to install all required library then detup docker and then make docker up

## Database
 * ## Books

    ```
    table Books {
        id: DataTypes.INTEGER,
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        isbn: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
        shelfLocation: DataTypes.STRING,
    }
    ```
    
    
 * ## Borrowers

    ```
    table borrower{
        id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        registeredDate: DataTypes.DATE,
    }
    ```
    
 * ## Borrowing

    ```
    table borrowing{
      id: DataTypes.INTEGER,
        dueDate: DataTypes.DATE,
        returnedDate: DataTypes.DATE,
        borrowerId: DataTypes.INTEGER,
        bookId: DataTypes.INTEGER,
    }
    ```