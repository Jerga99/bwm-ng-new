
const express = require('express');
const bodyParser = require('body-parser');

const rentalRoutes = require('./routes/rentals');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json())

// Api Routes
app.use('/api/v1/rentals', rentalRoutes);




app.listen(PORT, () => {
  console.log('Server is listening on port: ', PORT);
})
