const express = require('express');
const router = express.Router();
const { getTransaction } = require('../controllers/transactionsController');

router.route('/').get(getTransaction);

module.exports = router;