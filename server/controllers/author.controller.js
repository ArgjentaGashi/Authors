const Author = require('../models/author.model');

module.exports = {
  getAuthors: (req, res) => {
    Author.find({})
    .sort('name')
      .then((authors) => {
        res.json(authors);
      })
      .catch((err) => {
        res.status(400).json({ message: 'something went wrong in find all authors', error: err });
      });
  },
  getAuthorById: (req, res) => {
    Author.findOne({ _id: req.params.id })
      .then((author) => {
        res.json(author);
      })
      .catch((err) => {
        res.status(400).json({ message: 'something went wrong in find author', error: err });
      });
  },
  createAuthor: (req, res) => {
    Author.create(req.body)
      .then((newAuthor) => {
        res.status(201).json(newAuthor);
      })
      .catch((err) => {
        res
          .status(400)
          .json({ message: 'something went wrong in create author', errors: err.errors });
      });
  },
  updateAuthor: (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
      .then((author) => {
        res.json(author);
      })
      .catch((err) => {
        res.status(400).json({ message: 'something went wrong in update author', error: err });
      });
  },
  deleteAuthor: (req, res) => {
    Author.deleteOne({ _id: req.params.id })
      .then((author) => {
        res.json(author);
      })
      .catch((err) => {
        res.status(400).json({ message: 'something went wrong in delete author', error: err });
      });
  },
};