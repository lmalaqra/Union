const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const { SlotModel } = require("./src/models/slot");

server.listen(8000, () => {
  console.log("server is listening on 8000");
});

// const days = ["sun", "mon", "tue", "wed", "thu"];
// days.forEach(async (day, index) => {
//   for (let i = 0; i < 20; i++) {
//     await SlotModel.create({ day: index, slot_index: i, students: [] });
//   }
// });
