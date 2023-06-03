const express = require('express');
const router = express.Router();

const {AdsManagerView, AdsManagerViewById, AdsManagerPayment, AdsManagerDone, } = require('./../../controllers/AdminController/AdsManagerController');

router.get('/view', AdsManagerView);
router.get('/view/:id', AdsManagerViewById);
router.put('/payment/:id', AdsManagerPayment);
router.put('/done/:id', AdsManagerDone);





module.exports = router;