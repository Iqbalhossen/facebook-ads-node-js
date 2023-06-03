const express = require('express');
const router = express.Router();

const {ManagerStore, ManagerView, StaffStore, StaffView} = require('./../../controllers/AdminController/RoleController');

router.post('/manager/add', ManagerStore);
router.get('/manager/view', ManagerView);
router.get('/staff/add', StaffStore);
router.get('/staff/view', StaffView);





module.exports = router;