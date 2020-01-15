
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

app.delete('/api/v1/rentals/:id', (req, res) => {
  const { id } = req.params;
  const rIndex = rentals.findIndex(r => r._id === id);

  rentals.splice(rIndex, 1);
  return res.json({message: `Rental with id: ${id} was removed!`});
})

app.patch('/api/v1/rentals/:id', (req, res) => {
  const { id } = req.params;
  const rentalToUpdate = req.body;
  const rIndex = rentals.findIndex(r => r._id === id);

  rentals[rIndex].city = rentalToUpdate.city;
  rentals[rIndex].title = rentalToUpdate.title;
  
  return res.json({message: `Rental with id: ${id} was updated!`});
})


app.listen(PORT, () => {
  console.log('Server is listening on port: ', PORT);
})
