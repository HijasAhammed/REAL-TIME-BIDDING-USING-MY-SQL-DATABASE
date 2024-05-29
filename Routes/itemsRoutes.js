const express=require("express")
const itemController=require("../Controllers/itemController");
const authMiddleware=require("../Middileware/authMiddleware");
const roleMidddleware=require("../Middileware/roleMiddleware");
const router=express.Router();


router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getItemById);
router.post('/', authMiddleware.authenticate, itemController.createItem);
router.put('/:id', authMiddleware.authenticate, itemController.updateItem);
router.delete('/:id', authMiddleware.authenticate, itemController.deleteItem);

module.exports= router;
