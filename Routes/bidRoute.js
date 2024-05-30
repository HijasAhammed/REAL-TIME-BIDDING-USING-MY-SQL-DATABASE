const express = require('express');
const router = express.Router();
const bidsController = require('../Controllers/bidsController');
const { authenticateToken } = require('../Middileware/authMiddleware');
router.get('/:itemId/bids', bidsController.getAllBidsForItem);
router.post('/:itemId/bids', bidsController.placeBid);
module.exports = router;