

const express = require('express');
const router = express.Router();
const { onlyAuthUser } = require('../controllers/users');

router.post('', onlyAuthUser, (req, res) => {
  return res.json({message: 'Uploading File...'})
});


module.exports = router;
