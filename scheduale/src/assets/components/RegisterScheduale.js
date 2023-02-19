import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function RegisterScheduale({ slots, setSlots }) {
  function indexToTime(index) {
    let hours;
    let time;
    if (index % 2 === 0) {
      hours = 8 + index / 2;
      time = `${hours}:00`;
    } else {
      hours = 8 + (index - 1) / 2;
      time = `${hours}:30`;
    }

    if (hours < 10) {
      time = "0" + time;
    }

    console.log(time);

    return time;
  }
  function timeToIndex(time) {
    let index = 0;

    const times = time.split(":");
    const hours = parseInt(times[0]);
    index = hours - 8;
    if (times[1] !== "00") {
      index += 1;
    }
    return index;
  }

  return (
    <div>
      <h1 className="text-xl font-bold tracking-wider">
        Enter your Free/break time{" "}
      </h1>

      <div className="flex flex-col py-4 gap-x-6 justify-center items-center w-full px-2">
        {slots.map((e) => (
          <div className="flex  text-center items-center  ">
            <h2 className="font-bold mr-2  text-left text-sm border-r-2  w-12 ">
              {e.day}
            </h2>
            <div className=" flex flex-col flex-nowrap">
              {e.times.map((el, i) => (
                <div className="flex w-full justify-between items-center flex-wrap">
                  <input
                    min={`08:00`}
                    max="17:00"
                    onChange={(event) => {
                      // @ts-ignore
                      setSlots((prev) =>
                        prev.map((slot) => {
                          if (slot.day === e.day) {
                            return {
                              ...slot,
                              times: slot.times.map((time, timeIndex) => {
                                if (timeIndex === i) {
                                  time[0] = event.target.value;
                                }

                                return time;
                              }),
                            };
                          }

                          return slot;
                        })
                      );
                    }}
                    type="time"
                    name="from"
                    value={el[0]}
                    className="text-sm"
                  />

                  <label
                    className="text-xs font-bold text-gray-700"
                    htmlFor="from"
                  >
                    to{" "}
                  </label>
                  <input
                    onChange={(event) => {
                      // @ts-ignore
                      setSlots((prev) =>
                        prev.map((slot) => {
                          if (slot.day === e.day) {
                            return {
                              ...slot,
                              times: slot.times.map((time, timeIndex) => {
                                if (timeIndex === i) {
                                  time[1] = event.target.value;
                                }

                                return time;
                              }),
                            };
                          }

                          return slot;
                        })
                      );
                    }}
                    value={el[1]}
                    type="time"
                    name="from"
                  />
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      setSlots((prev) => {
                        return prev.map((slot, index) => {
                          if (slot.day === e.day) {
                            if (slot.times.length <= 1) {
                              slot.times = [[]];
                              return slot;
                            }
                            return {
                              ...slot,
                              times: slot.times.filter(
                                (time, timeIndex) => timeIndex !== i
                              ),
                            };
                          }
                          return slot;
                        });

                        return prev;
                      });
                    }}
                    className="w-4 h-4 text-lg text-red-700 cursor-pointer  "
                  >
                    -
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={(event) => {
                event.preventDefault();
                setSlots((prev) => {
                  return prev.map((el, index) => {
                    debugger;
                    if (el.day === e.day) {
                      el.times.push([]);
                      return el;
                    }
                    return el;
                  });
                });
              }}
              className="w-4 h-4 rounded-full text-blue-700 shadow-md text-sm ml-4 "
            >
              {" "}
              +{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RegisterScheduale;
