const Notification = require('../Models/notifications');

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.findAll({ where: { user_id: req.user.id } });
    res.json(notifications);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.markRead = async (req, res) => {
  try {
    const { notificationIds } = req.body;
    await Notification.update({ is_read: true }, { where: { id: notificationIds, user_id: req.user.id } });
    res.json({ message: 'Notifications marked as read' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
