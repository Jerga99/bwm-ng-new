
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

const rentals = [
  {
    _id: '2137129312',
    city: 'New York',
    title: 'Very nice place'
  },
  {
    _id: 'asjkdajdasnda',
    city: 'Berlin',
    title: 'Very nice place as well!'
  },
]

// Middleware
app.use(bodyParser.json())

app.get('/api/v1/rentals', (req, res) => {
  return res.json(rentals);
})

app.get('/api/v1/rentals/:rentalId', (req, res) => {
  const { rentalId } = req.params;
  const rental = rentals.find(r => r._id === rentalId);

  return res.json(rental)
})

app.post('/api/v1/rentals', (req, res) => {
  const rentalData = req.body;
  rentals.push(rentalData);

  return res.json({message: `Rental with id: ${rentalData._id} was added!`});
})




app.listen(PORT, () => {
  console.log('Server is listening on port: ', PORT);
})
