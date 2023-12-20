"use strict";

const router = require("express").Router();
const itemController = require("../controllers/itemControllers");

router.get("/", itemController.getAllItem);
router.post("/", itemController.addItem);
router.put("/:id", itemController.updateItem);
router.delete("/:id", itemController.deleteItem);

module.exports = router;
