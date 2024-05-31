const express = require("express");
const router = express.Router();
const eventsController = require("../controller/eventsController.js")

// Index
router.get("/", eventsController.index)

// Store
router.post("/", eventsController.store)

// update
router.put("/:event", eventsController.update)


module.exports = router;