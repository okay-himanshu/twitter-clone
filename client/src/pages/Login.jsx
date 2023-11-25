import { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Input } from "../components";
import URL_CONFIG from "../config/url_config";

function Login() {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const toggleUserNameOrEmail = () => {
    setToggle(!toggle);
    setEmail("");
    setUsername("");
  };

  // login
  const handleUserLogin = async () => {
    try {
      const data = toggle ? { username, password } : { email, password };
      console.log(data);
      const res = await axios.post(
        `${URL_CONFIG.API_ENDPOINTS}/user/login`,
        data
      );
      if (res.data.success) return navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <div className="p-10 sm:flex justify-center gap-20 items-center mt-20">
        <div className="flex justify-start sm:justify-center gap-5 items-center">
          <FaXTwitter className="text-start text-[6rem] sm:text-[12rem] lg:text-[20rem] " />
          <h1 className="sm:hidden  text-3xl">Login</h1>
        </div>
        <div className="sm:w-96">
          <h1 className="hidden sm:block text-4xl">Login</h1>
          <form onSubmit={(event) => event.preventDefault()}>
            <Input
              title={toggle ? "Username" : "Email"}
              type={toggle ? "text" : "email"}
              placeholder={""}
              value={toggle ? username : email}
              handleChange={(event) => {
                toggle
                  ? setUsername(event.target.value)
                  : setEmail(event.target.value);
              }}
            />
            <p
              className="text-end text-sm -mt-4 text-blue-400 cursor-pointer select-none hover:underline underline-offset-2"
              onClick={toggleUserNameOrEmail}
            >
              {toggle ? "User Email Instead?" : "Use Username Instead?"}
            </p>
            <Input
              title="Password "
              type={"password"}
              placeholder={""}
              value={password}
              handleChange={(event) => setPassword(event.target.value)}
            />

            <button
              onClick={handleUserLogin}
              className="mt-5 mb-2 bg-white  text-black border hover:bg-gray-200 transition-all duration-150  py-2.5   rounded-full  font-medium flex justify-center  items-center gap-2  w-40 xs:w-full"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
