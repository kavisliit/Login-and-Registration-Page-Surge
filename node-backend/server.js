//Declare the variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyparser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, (err) => {
  if (err) throw err;
  console.log('connected to MongoDB');
});

// mongoose.connect(URL, {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopologyL: true,
//   useFindAndModify: false,
// });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('mongodb connection is success!!!');
});

const userRouter = require('./routes/users.js');
app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`service is up and running on port ${PORT}`);
});
