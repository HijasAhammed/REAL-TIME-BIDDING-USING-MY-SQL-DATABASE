const Item = require('../Models/items'); 
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    console.error(error); 
    res.status(400).json({ error: error.message });
  }
};
exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    console.error(error); 
    res.status(400).json({ error: error.message });
  }
};
exports.createItem = async (req, res) => {
  try {
    const { name, description, starting_price, end_time } = req.body;
    const image_url = req.file ? `/uploads/${req.file.filename}` : null;
    const item = await Item.create({ 
      name, 
      description, 
      starting_price, 
      current_price: starting_price, 
      end_time, 
      image_url 
    });
    res.status(201).json(item);
  } catch (error) {
    console.error(error); 
    res.status(400).json({ error: error.message });
  }
};
exports.updateItem = async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    if (item.user_id !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access forbidden' });
    }
    const updateData = {};
    const { name, description, starting_price, end_time, image_url } = req.body;
    if (name !== undefined) updateData.name = name;
    if (description !== undefined) updateData.description = description;
    if (starting_price !== undefined) updateData.starting_price = starting_price;
    if (end_time !== undefined) updateData.end_time = end_time;
    if (image_url !== undefined) updateData.image_url = image_url;

    await item.update(updateData);
    res.json(item);
  } catch (error) {
    console.error(error); 
    res.status(400).json({ error: error.message });
  }
};
exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    if (item.user_id !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access forbidden' });
    }
    await item.destroy();
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error(error); 
    res.status(400).json({ error: error.message });
  }
};
