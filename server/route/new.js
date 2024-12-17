const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/shoes',controller.getallshoes);
router.get('/shoe/:category',controller.getshoesbyname);
module.exports = router;