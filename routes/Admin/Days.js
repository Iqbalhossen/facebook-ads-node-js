const express = require('express');
const router = express.Router();

const {daysStore, daysView, daysViewById, daysEdit, daysUpdate, daysDelete} = require('./../../controllers/AdminController/DaysController');

router.post('/add', daysStore);
router.get('/view', daysView);
router.get('/view/:id', daysViewById);




module.exports = router;