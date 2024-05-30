const Bid = require('../Models/bid');
const Item = require('../Models/items');
exports.getAllBidsForItem = async (req, res) => {
  try { 
    const itemId = req.params.itemId;
    const bids = await Bid.findAll({ where: { itemId } });
    res.json(bids);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
exports.placeBid = async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const userId = req.user.id; 
    const bidAmount = req.body.bidAmount;
    const item = await Item.findByPk(itemId);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    if (bidAmount <= item.currentPrice) {
      return res.status(400).json({ error: 'Bid must be higher than the current price' });
    }
    if (item.endTime < Date.now()) {
      return res.status(400).json({ error: 'Auction has ended' });
    }
    const newBid = await Bid.create({
      itemId,
      userId,
      bidAmount,
    });
    item.currentPrice = bidAmount;
    await item.save();
    res.status(201).json(newBid);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};