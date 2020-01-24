

const express = require('express');
const router = express.Router();
const { 
  createBooking } = require('../controllers/bookings');
const { onlyAuthUser } = require('../controllers/users');

router.post('', onlyAuthUser, createBooking);

module.exports = router;
