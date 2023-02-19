import React, { useState, useEffect } from "react";

function SecondRegister({ user, setUser }) {
  const [isVisable, setIsVisable] = useState(false);
  return (
    <>
      <h1 className="text-xl font-bold tracking-wider">
        Personal Information{" "}
      </h1>
      <div className="flex flex-wrap justify-around gap-4 text-center py-10 px-4   ">
        <div className="">
          <label className="mr-4 text-sm">ID</label>
          <input
            onChange={(e) => {
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
            className="border-1 shadow-md w-full  P-2 mt-2"
            type={`text`}
            value={user.student_id}
            name="student_id"
          />
        </div>
        <div className="">
          <label className="mr-4 text-sm">NAME</label>
          <input
            onChange={(e) => {
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
            className="border-1 shadow-md w-full  P-2 mt-2"
            type={`text`}
            value={user.name}
            name="name"
          />
        </div>
        <div className="">
          <label className="mr-4 text-sm">EMAIL</label>
          <input
            onChange={(e) => {
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
            className="border-1 shadow-md w-full  P-2 mt-2"
            type={`text`}
            value={user.email}
            name="email"
          />
        </div>
        <div className="">
          <label className="mr-4 text-sm">PHONE</label>
          <input
            onChange={(e) => {
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
            className="border-1 shadow-md w-full  P-2 mt-2"
            type={`number`}
            value={user.phone}
            name="phone"
          />
        </div>
        <div className="w-1/3">
          <label className="mr-4 text-sm">CLASS</label>
          <div
            onClick={() => setIsVisable(!isVisable)}
            className="border-1 min-w-full shadow-md w-full  relative  P-2 mt-2"
          >
            {user.class} <span className="absolute right-1"> &#9660;</span>{" "}
            <div
              className={`flex flex-col w-full absolute shadow-md ${
                !isVisable ? "hidden" : ""
              }`}
            >
              <h3
                onClick={(e) =>
                  setUser((prev) => ({ ...prev, class: e.target.title }))
                }
                title="121"
                className="cursor-pointer hover:bg-slate-200"
              >
                121
              </h3>
              <h3
                onClick={(e) =>
                  setUser((prev) => ({ ...prev, class: e.target.title }))
                }
                className="cursor-pointer hover:bg-slate-200"
                title="122"
              >
                122
              </h3>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <label className="mr-4 text-sm ">ADDRESS</label>
          <input
            onChange={(e) => {
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
            className="border-1 shadow-md w-full  P-2 mt-2"
            type={`text`}
            value={user.state}
            name="state"
          />
        </div>
      </div>
      ,
    </>
  );
}

export default SecondRegister;
