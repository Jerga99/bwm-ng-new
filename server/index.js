
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const rentalRoutes = require('./routes/rentals');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb+srv://test:testtest@cluster0-3b6sg.mongodb.net/bwm-new-dev?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log('Connected to DB!')
});

// Middleware
app.use(bodyParser.json())

// Api Routes
app.use('/api/v1/rentals', rentalRoutes);




app.listen(PORT, () => {
  console.log('Server is listening on port: ', PORT);
})
