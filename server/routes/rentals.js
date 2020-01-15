
const express = require('express');
const router = express.Router();

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

router.get('', (req, res) => {
  return res.json(rentals);
})

router.get('/:rentalId', (req, res) => {
  const { rentalId } = req.params;
  const rental = rentals.find(r => r._id === rentalId);

  return res.json(rental)
})

router.post('', (req, res) => {
  const rentalData = req.body;
  rentals.push(rentalData);

  return res.json({message: `Rental with id: ${rentalData._id} was added!`});
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rIndex = rentals.findIndex(r => r._id === id);

  rentals.splice(rIndex, 1);
  return res.json({message: `Rental with id: ${id} was removed!`});
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const rentalToUpdate = req.body;
  const rIndex = rentals.findIndex(r => r._id === id);

  rentals[rIndex].city = rentalToUpdate.city;
  rentals[rIndex].title = rentalToUpdate.title;
  
  return res.json({message: `Rental with id: ${id} was updated!`});
})

module.exports = router;