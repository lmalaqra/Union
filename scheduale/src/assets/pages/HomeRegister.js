import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Register from "./Register";
import SecondRegister from "../components/SecondRegister";
import RegisterScheduale from "../components/RegisterScheduale";

function Home() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [status, setStatus] = useState("not registered ");
  const [isError, setIsError] = useState({ error: false, msg: "" });
  const [user, setUser] = useState({
    student_id: "",
    email: "",
    name: "",
    phone: "",
    class: "122",
    state: "",
  });
  const [slots, setSlots] = useState([
    { day: "SUN", times: [[]] },
    { day: "MON", times: [[]] },
    { day: "TUE", times: [[]] },
    { day: "WED", times: [[]] },
    { day: "THU", times: [[]] },
  ]);

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios
        .post("http://localhost:8000/register", { user, slots })
        .then((res) => res.data);
      navigate("/");
      console.log(res);
    } catch (e) {
      console.log(e);
      setIsError({ error: true, msg: e.response.data.error });
      navigate("/");
    }
  };
  return (
    <div
      style={{ height: "100vh" }}
      className=" justify-center h-full relative "
    >
      <div className="w-full absolute py-2 px-8  flex justify-center items-center ">
        <img className="  w-20 h-20" src="/logo.jpg" alt="logo" />
      </div>
      <div className="   text-center flex  justify-center items-start h-full w-full my-auto">
        <Register registerUser={registerUser}>
          <SecondRegister user={user} setUser={setUser} />
          <RegisterScheduale slots={slots} setSlots={setSlots} />
        </Register>
      </div>
    </div>
  );
}

export default Home;
