const express = require('express');
const router = express.Router();

const {AdsRequestView, AdsRequestAccept, AdsRequestReject, AdsRequestProccesing, AdsRequestDone, AllAdsRequestView, AdsRequestById} = require('./../../controllers/AdminController/AdsRequestsController');

router.get('/view', AdsRequestView);
router.get('/all/view', AllAdsRequestView);
router.put('/accept/:id', AdsRequestAccept);
router.put('/reject/:id', AdsRequestReject);
router.put('/proccesing/:id', AdsRequestProccesing);
router.put('/done/:id', AdsRequestDone);
router.get('/view/:id', AdsRequestById);





module.exports = router;