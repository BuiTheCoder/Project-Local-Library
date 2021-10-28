function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => {
    const borrows = book.borrows;
    return borrows[0].returned === false;
  }).length;
}

function getMostCommonGenres(books) {
  const whatever = books.reduce((acc, curr) => {
    if (acc.hasOwnProperty(curr.genre)) {
      acc[curr.genre] = acc[curr.genre] + 1;
    } else {
      acc[curr.genre] = 1;
    }
    return acc;
  }, {});
  const result = Object.entries(whatever)
    .map(([name, count]) => {
      return {
        name: name,
        count: count,
      };
    })
    .sort((genreA, genreB) => {
      return genreA.count < genreB.count ? 1 : -1;
    })
    .slice(0, 5);

  return result;
}

function pp(shit) {
  return console.log(JSON.stringify(shit, null, 2));
}

function getMostPopularBooks(books) {
  return books
    .map((book) => {
      return {
        name: book.title,
        count: book.borrows.length,
      };
    })
    .sort((lengthA, lengthB) => {
      return lengthA.count < lengthB.count ? 1 : -1;
    })
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  const authorIdToBorrowsMap = books
    .map((book) => {
      return {
        authorId: book.authorId,
        borrowsLength: book.borrows.length,
      };
    })
    .reduce((acc, curr) => {
      if (acc[curr.authorId]) {
        acc[curr.authorId] = acc[curr.authorId] + curr.borrowsLength;
      } else {
        acc[curr.authorId] = curr.borrowsLength;
      }
      return acc;
    }, {});

  return authors
    .map((author) => {
      const { first, last } = author.name;
      return {
        name: `${first} ${last}`,
        count: authorIdToBorrowsMap[String(author.id)],
      };
    })
    .sort((lengthA, lengthB) => {
      return lengthA.count < lengthB.count ? 1 : -1;
    })
    .slice(0, 5);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
