const express = require('express');
const router = express.Router();

const commonController = require('../controllers/commonController')

router.post('/:id', commonController.intialize);


module.exports = router;