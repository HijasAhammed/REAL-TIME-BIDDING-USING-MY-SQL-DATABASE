const Bid = require('../Models/bid');
const Item = require('../Models/items');

// Get all bids for a specific item
exports.getAllBidsForItem = async (req, res) => {
  try { 
    const itemId = req.params.itemId;
    const bids = await Bid.findAll({ where: { itemId } });
    res.json(bids);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Place a new bid on an item
exports.placeBid = async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const userId = req.user.id; // Assuming you have the user ID in the request object
    const bidAmount = req.body.bidAmount;

    // Find the item being bid on
    const item = await Item.findByPk(itemId);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    // Check if the bid is higher than the current price
    if (bidAmount <= item.currentPrice) {
      return res.status(400).json({ error: 'Bid must be higher than the current price' });
    }

    // Check if the auction has ended
    if (item.endTime < Date.now()) {
      return res.status(400).json({ error: 'Auction has ended' });
    }

    // Create a new bid
    const newBid = await Bid.create({
      itemId,
      userId,
      bidAmount,
    });

    // Update the current price of the item
    item.currentPrice = bidAmount;
    await item.save();

    res.status(201).json(newBid);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};