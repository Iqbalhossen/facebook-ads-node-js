const express = require('express');
const router = express.Router();

const {AdsRequestsStore, AdsRequestsView, AdsRequestsRcceptView, AdsRequestsRejectView, AdsRequestsPayment, AdsRequestsUpdate, AllAdsRequestsView, AdsRequestsDelete} = require('./../../controllers/User/AdsRequests');

router.post('/add', AdsRequestsStore);
router.get('/all/view/:userId', AllAdsRequestsView);
router.get('/view/:userId', AdsRequestsView);
router.get('/accept/view/:userId', AdsRequestsRcceptView);
router.get('/reject/view/:userId', AdsRequestsRejectView);
router.put('/payment/:id', AdsRequestsPayment);
router.delete('/delete/:id', AdsRequestsDelete);




module.exports = router;