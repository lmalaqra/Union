import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function Register({ children, registerUser }) {
  const [count, setCount] = useState(0);
  console.log(children.length);
  return (
    <div className="w-full h-full  flex justify-center items-center  ">
      <div className="shadow-md border-1 border-slate-100 py-6  bg-slate-  md:w-3/4 lg:w-2/4 xl:w-2/4">
        {children.map((e, i) => {
          if (i === count) return e;
          return "";
        })}

        <div className="flex justify-center items-center w-full my-4">
          <span
            className={`w-3 h-3 rounded-full ${
              count === 0 ? "bg-blue-600" : "bg-slate-400"
            } mr-4 `}
          ></span>
          <span
            className={`w-3 h-3 rounded-full ${
              count === 1 ? "bg-blue-600" : "bg-slate-400"
            } mr-4 `}
          ></span>
        </div>
        <div className="flex justify-center items-center w-full">
          {count !== 0 ? (
            <button
              onClick={() => setCount(0)}
              className="py-1 px-4 mx-4 bg-blue-600 text-white text-lg rounded-md "
            >
              &#8592;
            </button>
          ) : (
            ""
          )}
          {0 <= count && count < children.length - 1 ? (
            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="py-1 px-4 rounded-md bg-blue-600 text-white text-xl rounded-md  "
            >
              &#8594;
            </button>
          ) : (
            <button
              onClick={registerUser}
              className="py-2 px-4 bg-blue-600 text-white text-md rounded-md "
            >
              Register
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
