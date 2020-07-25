const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

// load env vars
dotenv.config({ path: './config/config.env' });

// Connect to DB
connectDB();

// Import Routes
const bootcamps = require('./routes/bootcamp');

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

// Mount ROuters
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`ERROR: ${err.message}`.red);
  // Close Server and exit process
  server.close(process.exit());
});
