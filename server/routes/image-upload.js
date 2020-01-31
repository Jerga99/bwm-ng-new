

const express = require('express');
const router = express.Router();

const { onlyAuthUser } = require('../controllers/users');

const upload = require('../services/multer');
const singleUpload = upload.single('image');

const singleUploadCtrl = (req, res, next) => {
  singleUpload(req, res, (error) => {
    if (error) {
      return res.sendApiError(
        { title: 'Upload Error', 
          detail:  error.message});
    }

    next();
  })
}

router.post('', onlyAuthUser, singleUploadCtrl, (req, res) => {

  try {
    if (!req.file) { throw new Error('Image is not presented!');}
    console.log(req.file);
    return res.json({message: 'Uploading File...'})
  } catch(error) {
    return res.sendApiError(
      { title: 'Upload Error', 
        detail:  error.message});
  }

  
});


module.exports = router;
