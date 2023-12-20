"use strict";

const router = require("express").Router();
const categoryRoute = require("./categoryRoutes");
const itemRoute = require("./itemRoutes");

router.use("/categories", categoryRoute);
router.use("/items", itemRoute);

module.exports = router;
