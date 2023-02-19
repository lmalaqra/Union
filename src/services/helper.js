function timeToindex(time) {
  console.log(time);
  let times = time.split(":");
  let hours = parseInt(times[0]);
  if (parseInt(times[1]) === 0) {
    return hours - 8;
  } else {
    return hours - 7;
  }
}

const convertTimeToIndexes = (slots) => {
  return slots.map((slot) => {
    return {
      ...slot,
      times: slot.times.map((time, i) => {
        if (!time) return [];
        if (time.length !== 0) {
          const allSlots = [];
          for (let k = timeToindex(time[0]); k <= timeToindex(time[1]); k++) {
            allSlots.push(k);
          }
          return allSlots;
        }
        return time;
      }),
    };
  });
};

module.exports = { convertTimeToIndexes };
