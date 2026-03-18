const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const initDb = (callback) => {
  if (mongoose.connection.readyState === 1) {
    console.log('Db is already initialized!');
    return callback(null, mongoose.connection);
  }
  mongoose.connect(process.env.MONGODB_URI)
    .then((client) => {
      console.log("Connected to MongoDB via Mongoose");
      callback(null, client);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (mongoose.connection.readyState !== 1) {
    throw Error('Db not initialized');
  }
  return mongoose.connection;
};

module.exports = {
  initDb,
  getDb
};