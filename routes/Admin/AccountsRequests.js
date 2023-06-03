const express = require('express');
const router = express.Router();

const {AccountsView, AccountsAssign, AccountDelete } = require('./../../controllers/AdminController/AccountsRequestsController');

router.get('/view', AccountsView);
router.put('/assign/:id', AccountsAssign);
router.delete('/delete/:id', AccountDelete);


module.exports = router;