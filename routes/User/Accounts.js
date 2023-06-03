const express = require('express');
const router = express.Router();

const multer  = require('multer')
const upload = multer({ dest: '../../uploads/' })

const {AccountsStore, AccountsView, AccountsViewById} = require('./../../controllers/User/AccountsController');

router.post('/add', AccountsStore);

router.get('/view/:userId', AccountsView);
router.get('/view/:userId/:id', AccountsViewById);





module.exports = router;