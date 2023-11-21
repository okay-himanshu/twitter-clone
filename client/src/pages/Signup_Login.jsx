import { FaXTwitter, FaApple } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

function Signup_Login() {
  return (
    <div className="lg:flex lg:items-center lg:justify-center lg:gap-32 p-4 sm:p-20 lg:p-10 pb-10   lg:w-full  xs:p-10  overflow-x-auto xs:overflow-hidden">
      <div>
        <FaXTwitter className="text-6xl lg:text-[20rem]" />
      </div>

      <div>
        <div className="mt-14  text-4xl sm:text-6xl font-bold">
          <h1>Happening now</h1>
        </div>

        <div className="mt-6 text-[1.5rem] font-bold mb-5">
          <h3>Join Today.</h3>
        </div>

        <div className=" mt-1 mb-2 bg-white text-black py-2   rounded-full  font-medium flex justify-center  items-center gap-2  xs:w-80">
          <FcGoogle size={20} /> <button>Signup with Google</button>
        </div>
        <div className=" mt-1 mb-2 bg-white text-black py-2   rounded-full font-medium flex justify-center  items-center gap-2  xs:w-80">
          <FaApple size={20} /> <button>Signup with Apple</button>
        </div>

        <div className="h-5"></div>

        <div className="mt-1 mb-2 bg-[#1d9bf0] text-white py-2.5   rounded-full  font-medium flex justify-center  items-center gap-2  xs:w-80">
          <button>Create account</button>
        </div>

        <div className="text-xs font-light w-80">
          By signing up, you agree to the{" "}
          <span className="text-[#1d9bf0]">Terms of Service</span> and{" "}
          <span className="text-[#1d9bf0]"> Privacy Policy</span>, including
          <span className="text-[#1d9bf0]"> Cookie Use</span>.
        </div>

        <div className="mt-10 font-bold text-xl ">
          <h2>Already have an account?</h2>
        </div>

        <div className="mt-5 mb-2 bg-black text-[#1d9bf0] border hover:bg-[#3b3b4238] transition-all duration-150 border-[#1d9bf0] py-2.5   rounded-full  font-medium flex justify-center  items-center gap-2  xs:w-80">
          <button>Sign in</button>
        </div>
      </div>
    </div>
  );
}

export default Signup_Login;
