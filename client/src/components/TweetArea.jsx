import { useNavigate } from "react-router-dom";

import { UserImg } from ".";
import {
  twitter_align,
  twitter_gif,
  twitter_image,
  twitter_location,
} from "../assets/svgs";

import { useAuth } from "../contexts/auth";
import { useGlobal } from "../contexts/context.global";
import { useEffect } from "react";
import { BsPerson } from "react-icons/bs";

function TweetArea() {
  const { auth } = useAuth();
  const { handleTweetPost, newTweet, setNewTweet, login } = useGlobal();
  const navigate = useNavigate();

  const handleNavigate = () => navigate("/signup_login");

  return (
    <>
      <section className="flex w-full ml-4">
        <div className="w-1/12 mt-3">
          {auth?.user ? (
            <UserImg
              img={`https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${auth?.user?.username}`}
            />
          ) : (
            <BsPerson size={25} />
          )}
        </div>
        <div className="w-[90%] mt-3">
          <textarea
            onChange={(event) => setNewTweet(event.target.value)}
            value={newTweet}
            placeholder="What is happening?!"
            className="border border-r-0 border-l-0 border-t-0 border-gray-800  w-full h-16 bg-black outline-none resize-none  font-light text-lg "
          ></textarea>

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
      </section>
    </>
  );
}

export default TweetArea;
