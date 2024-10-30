//Taken from Module 18, Mini Project (Activity 28)

const { connect, connection } = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/studentsDB';

connect(connectionString);

module.exports = connection;