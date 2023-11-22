import { FaXTwitter } from "react-icons/fa6";
import { Input } from "../components";

function Signup() {
  return (
    <>
      <div className="p-10 sm:flex justify-center gap-20 items-center mt-">
        <div className="flex justify-start sm:justify-center gap-5 items-center">
          <FaXTwitter className="text-start text-[6rem] sm:text-[12rem] lg:text-[20rem] " />
          <h1 className="sm:hidden  text-3xl">Signup</h1>
        </div>
        <div className="sm:w-96">
          <h1 className="hidden sm:block text-4xl">Signup</h1>
          <Input title="Name" type={"text"} placeholder={""} />
          <Input title="Username" type={"text"} placeholder={""} />
          <Input title="Email" type={"email"} placeholder={""} />
          <Input title="Security Question" type={"text"} placeholder={""} />
          <Input title="Password" type={"password"} placeholder={""} />
          <Input title="Confirm Password" type={"password"} placeholder={""} />
          <button className="mt-5 mb-2 bg-white  text-black border hover:bg-gray-200 transition-all duration-150  py-2.5   rounded-full  font-medium flex justify-center  items-center gap-2  w-40 xs:w-full">
            Signup
          </button>
        </div>
      </div>
    </>
  );
}

export default Signup;
