const express = require('express');
const router = express.Router();

const {PageStore, PageView, PageEdit, PageUpdate, PageViewById, PageDelete} = require('./../../controllers/User/PageController');

router.post('/add', PageStore);
router.get('/view/:userId', PageView);
router.get('/edit/:id', PageEdit);
router.put('/update/:id', PageUpdate);
router.delete('/delete/:id', PageDelete);
router.get('/view/by/manager/:id', PageViewById);



module.exports = router;