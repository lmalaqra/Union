const { SlotModel } = require("../models/slot");

module.exports = class SlotServices {
  async registerStudentScheduale(student, slots) {
    try {
      const days = ["sun", "mon", "tue", "wed", "thu"];
      const arr = [];
      console.log(slots);

      slots.forEach(async (slot) => {
        slot.times.forEach(async (time) => {
          time.forEach(async (el) => {
            const foundSlot = await SlotModel.updateMany(
              { slot_index: el, day: days.indexOf(slot.day.toLowerCase()) },
              { $push: { students: student } }
            );
            arr.push(foundSlot);
          });
        });
      });
      return arr;
    } catch (e) {
      console.log(e);
    }
  }

  async getAllSlots() {
    // return SlotModel.aggregate([
    //   { $match: { day: { $exists: true } } },
    //   {
    //     $group: {
    //       _id: { day: "$day" },
    //       slot_index: { $addToSet: "$slot_index" },
    //       students: { $push: "$students" },
    //     },
    //   },
    //   { $sort: { slot_index: 1 } },
    // ]);
    return await SlotModel.find().sort({ day: 1, slot_index: 1 }).exec();
  }
};
