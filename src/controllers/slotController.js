const SlotServices = require("../services/slotServices");
const slotservices = new SlotServices();
module.exports = class SlotController {
  async getAllSlots(req, res, next) {
    try {
      const data = await slotservices.getAllSlots();
      return res.status(200).json(data);
    } catch (e) {
      console.log("error" + e);
      res.staus(400).json(e);
    }
  }
};
