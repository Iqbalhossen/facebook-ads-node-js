const express = require('express');
const router = express.Router();

const {Register, Login, PasswordChange, showUser, BannedUsers, ActiveUsers} = require('./../controllers/userController');

router.post('/register', Register);
router.post('/login', Login);
router.put('/password/change/:id', PasswordChange);
router.get('/show/user/:id', showUser);
router.put('/banned/:id', BannedUsers);
router.put('/active/:id', ActiveUsers);

 
module.exports = router;