import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Input } from "../components";
import URL_CONFIG from "../config/url_config";

function Signup() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  // signup

  const handleUserSignup = async () => {
    try {
      const res = await axios.post(`${URL_CONFIG.API_ENDPOINTS}/user/signup`, {
        name,
        username,
        email,
        securityQuestion,
        password,
        confirmPassword,
      });

      if (res.data.success) {
        navigate("/");
      } else {
        console.log(res.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) navigate("/");
  });

  return (
    <>
      <div className="p-10 sm:flex justify-center gap-20 items-center mt-">
        <div className="flex justify-start sm:justify-center gap-5 items-center">
          <FaXTwitter className="text-start text-[6rem] sm:text-[12rem] lg:text-[20rem] " />
          <h1 className="sm:hidden  text-3xl">Signup</h1>
        </div>
        <div className="sm:w-96">
          <h1 className="hidden sm:block text-4xl">Signup</h1>
          <form onSubmit={(event) => event.preventDefault()}>
            <Input
              title="Name"
              type={"text"}
              placeholder={""}
              value={name}
              handleChange={(event) => setName(event.target.value)}
            />
            <Input
              title="Username"
              type={"text"}
              placeholder={""}
              value={username}
              handleChange={(event) => setUsername(event.target.value)}
            />
            <Input
              title="Email"
              type={"email"}
              placeholder={""}
              value={email}
              handleChange={(event) => setEmail(event.target.value)}
            />
            <Input
              title="Security Question"
              type={"text"}
              placeholder={""}
              value={securityQuestion}
              handleChange={(event) => setSecurityQuestion(event.target.value)}
            />
            <Input
              title="Password"
              type={"password"}
              placeholder={""}
              value={password}
              handleChange={(event) => setPassword(event.target.value)}
            />
            <Input
              title="Confirm Password"
              type={"password"}
              placeholder={""}
              value={confirmPassword}
              handleChange={(event) => setConfirmPassword(event.target.value)}
            />
            <button
              onClick={handleUserSignup}
              className="mt-5 mb-2 bg-white  text-black border hover:bg-gray-200 transition-all duration-150  py-2.5   rounded-full  font-medium flex justify-center  items-center gap-2  w-40 xs:w-full"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
