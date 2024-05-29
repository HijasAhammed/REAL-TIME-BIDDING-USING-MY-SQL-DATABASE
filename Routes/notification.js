const express = require("express");
const notificationController = require("../Controllers/NotificationController");
const authMiddleware = require("../Middileware/authMiddleware");

console.log("Notification Controller:", notificationController);
console.log("Auth Middleware:", authMiddleware);

const router = express.Router();

router.get('/', authMiddleware, notificationController.getNotifications);
router.post('/markread', authMiddleware, notificationController.markRead);

module.exports = router;
