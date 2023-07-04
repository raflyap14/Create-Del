const express = require('express');

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
let books = [];

app.post('/books', (req, res) => {
  const newBooks = req.body;
  items.push(newBooks);
  res.status(201).json(newBooks);
});

app.delete('/books/:id', (req, res) => {
  const booksId = req.params.id;
  const booksIndex = books.findIndex(books => books.id === booksId);

  if (booksIndex !== -1) {
    const deletedBooks = books.splice(booksIndex, 1);
    res.status(200).json(deletedBooks);
  } else {
    res.status(404).json({ message: 'Books not found' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
