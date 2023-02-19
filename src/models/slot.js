const mongoose = require("mongoose");

const { studentSchema } = require("./Student");

const slotSchema = new mongoose.Schema({
  day: Number,
  slot_index: { type: Number, unique: true },
  students: [studentSchema],
});

const SlotModel = mongoose.model("Slot", slotSchema);
module.exports = { SlotModel };
