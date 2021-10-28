function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const firstArray = books.filter((book) => {
    return book.borrows[0].returned === false;
  });
  const secondArray = books.filter((book) => {
    return book.borrows[0].returned === true;
  });
  return [firstArray, secondArray];
}

function getBorrowersForBook(book, accounts) {
  const ids = book.borrows.map((people) => people.id);
  return accounts.filter(account => ids.includes(account.id))
    .map(item => {
      item.returned = true;
      return item;
    })
} 

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
