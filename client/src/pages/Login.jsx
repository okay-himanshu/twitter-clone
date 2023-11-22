import { FaXTwitter } from "react-icons/fa6";
import { Input } from "../components";

function Login() {
  return (
    <>
      <div className="p-10 sm:flex justify-center gap-20 items-center mt-20">
        <div className="flex justify-start sm:justify-center gap-5 items-center">
          <FaXTwitter className="text-start text-[6rem] sm:text-[12rem] lg:text-[20rem] " />
          <h1 className="sm:hidden  text-3xl">Login</h1>
        </div>
        <div className="sm:w-96">
          <h1 className="hidden sm:block text-4xl">Login</h1>
          <Input title="Username or Email" type={"text"} placeholder={""} />
          <Input title="Password " type={"password"} placeholder={""} />

          <button className="mt-5 mb-2 bg-white  text-black border hover:bg-gray-200 transition-all duration-150  py-2.5   rounded-full  font-medium flex justify-center  items-center gap-2  w-40 xs:w-full">
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
