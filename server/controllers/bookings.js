
const Booking = require('../models/booking');


exports.createBooking = (req, res) => {
  const bookingData = req.body;
  const booking = new Booking({...bookingData, user: res.locals.user});
  
  Booking.find({rental: booking.rental}, (error, rentalBookings) => {
    if (error) { return res.mongoError(error); }

    const isValid = checkIfBookingIsValid(booking, rentalBookings);
    if (isValid) {
      booking.save((error, savedBooking) => {
        if (error) { return res.mongoError(error); }

        return res.json({startAt: savedBooking.startAt, endAt: savedBooking.endAt})
      })
    } else {
      return res.json({message: 'Booking is NOT created!'});
    }
  })
}

// TODO: Provide actual implementation
function checkIfBookingIsValid(booking, rentalBookings) {
  return true;
}
