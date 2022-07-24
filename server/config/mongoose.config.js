const mongoose = require('mongoose');
//VERY IMPORTANT FOR SOME WINDOWS USERS
const mongoURI = 'mongodb://127.0.0.1:27017/authors';
// const mongoEndpoint = 'mongodb://localhost/';
const dbName = 'authors';

mongoose
  .connect(mongoURI + dbName)
  .then(() => console.log(`Connected to the ${dbName} db`))
  .catch((err) => console.log('ERROR IN CONNECTION TO DB', err));