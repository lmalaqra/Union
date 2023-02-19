const router = require("express").Router();
const SlotController = require("../controllers/slotController");
const slotController = new SlotController();

router.route("/").get(slotController.getAllSlots);

module.exports = router;
