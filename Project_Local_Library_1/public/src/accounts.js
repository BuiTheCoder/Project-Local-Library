function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) =>
    accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  let amountBorrowed = 0;
  const borrowedLog = books.filter((book) => {
    return book.borrows.forEach((borrow) => {
      if (borrow.id === account.id) {
        amountBorrowed++;
      }
    });
  });
  return amountBorrowed;
}

function getBooksPossessedByAccount(account, books, authors) {
  let newBooks = [];
  books.forEach((book) => {
    const entries = Object.entries(book);
    const [first, second, third, fourth, fifth] = entries;
    const matchingAuthor = authors.find((author) => {
      if (author.id === book.authorId) {
        return author;
      }
    });
    let bookWithAuthor = {};
    entries.map((entry) => {
      bookWithAuthor[first[0]] = first[1];
      bookWithAuthor[second[0]] = second[1];
      bookWithAuthor[third[0]] = third[1];
      bookWithAuthor[fourth[0]] = fourth[1];
      bookWithAuthor["author"] = matchingAuthor;
      bookWithAuthor[fifth[0]] = fifth[1];
    });
    newBooks.push(bookWithAuthor);
  });
  return newBooks.filter((newBook) => {
    return (
      newBook.borrows[0].id === account.id &&
      newBook.borrows[0].returned === false
    );
  });
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
