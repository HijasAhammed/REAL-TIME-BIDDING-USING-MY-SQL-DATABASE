const express=require("express");
const http=require("http");
const socketIo=require("socket.io");
const sequelize=require("./Config/database");
const authRoutes=require("./Routes/authRoute");
const userRoutes=require("./Routes/userRoutes");
const itemRoutes=require("./Routes/itemsRoutes");
const bidRoutes=require("./Routes/bidRoute");
const notification=require("./Routes/notification");
require("dotenv").config();
const app=express();
const server=http.createServer(app);
const io=socketIo(server);
app.use('/users', authRoutes);
app.use('/users', userRoutes);
app.use('/items', itemRoutes);
app.use('/bids', bidRoutes);
app.use('/notifications', notification);
  io.on('connection', (socket) => {
    socket.on('bid', async (data) => {
        const { itemId, userId, bidAmount } = data;
        const item = await Item.findByPk(itemId);
        if (item && bidAmount > item.current_price) {
            await item.update({ current_price: bidAmount });
            await Bid.create({ item_id: itemId, user_id: userId, bid_amount: bidAmount });
            io.emit('update', { itemId, bidAmount });
        }
    });
    socket.emit('notification', {
        userId: 'someUserId',
        notification: 'This is a notification'
    });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});