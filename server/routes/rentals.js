
const express = require('express');
const router = express.Router();
const { 
  getRentals,
  getRentalById,
  createRental,
  updateRental,
  deleteRental } = require('../controllers/rentals');

router.get('', getRentals);
router.get('/:rentalId', getRentalById);
router.post('', createRental);
router.delete('/:id', deleteRental);
router.patch('/:id', updateRental);

module.exports = router;

// noSQL - no tables, we are keeping data in JSON format