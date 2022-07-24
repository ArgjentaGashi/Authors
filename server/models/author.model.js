const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const AuthorSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, 'name is required'],
      minlength: [3, 'The name length should be at least 3 characters!!'],
    },
  },
  {
    timestamps: true,
  },
);
AuthorSchema.plugin(uniqueValidator);
const Author = mongoose.model('author', AuthorSchema);
module.exports = Author;