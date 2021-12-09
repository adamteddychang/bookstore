const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qdrNrAMV3sFxA9qazfks/books';

const newBook = async (book) => {
  const result = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: book.item_id,
      title: book.title,
      category: book.category,
    }),
  });

  return result.status === 201;
};

const getBooks = async () => {
  const request = await fetch(apiUrl);
  const books = await request.json();
  return books;
};

const deleteBook = async (bookId) => {
  const result = await fetch(`${apiUrl}/${bookId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: bookId,
    }),
  });

  return result === 'The book was deleted!';
};

export { newBook, getBooks, deleteBook };
