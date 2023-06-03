const express = require('express');
const router = express.Router();


const {CreditStore, CreditView, CreditDelete} = require('./../../controllers/User/CreditController');

router.post('/add', CreditStore);
router.get('/view/:userId/:account', CreditView);
router.delete('/delete/:id', CreditDelete);






module.exports = router;