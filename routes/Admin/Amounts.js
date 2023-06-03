const express = require('express');
const router = express.Router();

const {AmountsStore, AmountsView, AmountsViewById, daysEdit, daysUpdate, daysDelete} = require('./../../controllers/AdminController/AmountsController');

router.post('/add', AmountsStore);
router.get('/view', AmountsView);
router.get('/view/:id', AmountsViewById);





module.exports = router;