import { IoMdArrowRoundBack } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import {
  twitter_align,
  twitter_gif,
  twitter_image,
  twitter_location,
} from "../assets/svgs";
import UserImg from "./UserImg";
import { useAuth } from "../contexts/auth";
import { useGlobal } from "../contexts/context.global";

function MobileViewTweetArea({ status, setStatus }) {
  const { auth } = useAuth();
  const { handleTweetPost, newTweet, setNewTweet, login } = useGlobal();
  const navigate = useNavigate();

  const handleNavigate = () => navigate("/signup_login");

  const handleCloseTweetModal = () => setStatus(false);
  return (
    <div
      className={`bg-black absolute p-5  w-full h-screen sm:hidden    ${
        status ? "block" : "hidden"
      }`}
    >
      <nav className="flex justify-between items-center">
        <IoMdArrowRoundBack
          size={22}
          color="gray"
          onClick={handleCloseTweetModal}
          className="cursor-pointer"
        />
        <button className="bg-[#1D9BF0] rounded-full px-3 py-1">Post</button>
      </nav>

      <section className="flex mt-5 gap-4 ">
        {auth?.user ? (
          <UserImg
            img={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${auth?.user?.username}`}
          />
        ) : (
          <BsPerson size={25} />
        )}
        <textarea
          onChange={(event) => setNewTweet(event.target.value)}
          value={newTweet}
          placeholder="What is happening"
          className="bg-black  resize-none  w-full pb-20   outline-none font-light text-lg"
        ></textarea>
      </section>
      <div className="pt-5 border-[0.1rem] border-gray-500 border-t-0 border-l-0 border-r-0 w-full"></div>

      <div className="flex items-center justify-between mt-4 mb-4">
        <div className="flex items-center gap-6">
          <div>
            <img src={twitter_image} alt="" className="h-4 w-4" />
          </div>
          <div>
            <img src={twitter_gif} alt="" className="h-4 w-4" />
          </div>
          <div>
            <img src={twitter_align} alt="" className="h-4 w-4" />
          </div>
          <div>
            <img src={twitter_location} alt="" className="h-4 w-4" />
          </div>
        </div>
        <div>
          <button
            className={`${
              login
                ? "bg-[#1D9BF0]  px-6 py-2 text-white rounded-full"
                : "bg-[#0f4e78]  px-6 py-2 text-[#a5a3a3] rounded-full"
            }`}
            onClick={login ? handleTweetPost : handleNavigate}
          >
            {login ? "Post" : "Login to post"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileViewTweetArea;
