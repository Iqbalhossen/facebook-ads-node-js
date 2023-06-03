const express = require('express');
const router = express.Router();

const multer  = require('multer')
const upload = multer({ dest: '../../uploads/' })

const {AdsStore, AdsView, AdsEdit, AdsUpdate, AdsDelete} = require('./../../controllers/User/AdsManagersController');

router.post('/add', AdsStore);

router.get('/view/:userId', AdsView);
router.delete('/delete/:id', AdsDelete);




module.exports = router;