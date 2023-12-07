import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { LuDot } from "react-icons/lu";

import { useState, useEffect, useMemo } from "react";
import axios from "axios";

import { useAuth } from "../contexts/auth";
import URL_CONFIG from "../config/url_config";

import {
  twitter_analytics,
  twitter_like,
  twitter_reply,
  twitter_retweet,
} from "../assets/svgs/index";
import UserImg from "./UserImg";

function TweetCard() {
  const [allTweets, setAllTweets] = useState([]);
  const { auth } = useAuth();

  const fetchAllTweetLists = async () => {
    try {
      const { data } = await axios.get(
        `${URL_CONFIG.API_ENDPOINTS}/tweet/all-tweet-lists`
      );
      if (data.success) {
        setAllTweets(data?.allTweets);
      } else {
        console.log(data.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchAllTweetLists();
  }, []);

  // console.log(allTweets);
  console.log(allTweets?.user);
  return (
    <>
      {allTweets?.map((tweet) => (
        <main
          key={tweet?._id}
          className="flex justify-between  border-[0.1px] border-t-0 border-gray-800 overflow-x-auto p-2"
        >
          {/* left */}
          <section className="flex  gap:10 w-11/12">
            <div className="w-14 flex justify-center">
              <UserImg
                img={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${tweet?.user?.username}`}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between w-full">
              <div className="flex items-center text-gray-500 ">
                <h1 className="font-semibold text-white ">
                  {tweet?.user?.name}
                </h1>
                <h1 className="ml-2  hidden xs:flex ">
                  @{tweet?.user?.username}{" "}
                </h1>
                <h1 className="hidden xs:flex">{<LuDot />}</h1>
                <h1 className="hidden xs:flex">15h</h1>
              </div>
              <div className="flex items-center text-gray-400 ">
                <h1 className=" xs:hidden  ">@{tweet?.user?.username} </h1>
                <h1 className="xs:hidden ">{<LuDot />}</h1>
                <h1 className="xs:hidden">15h</h1>
              </div>
              <div>
                <p className="text-gray-300 ">{tweet?.tweet}</p>
              </div>
              <div className="flex justify-between py-2  text-gray-400 text-sm items-center ">
                <section className="flex gap-1.5  cursor-pointer">
                  <img src={twitter_reply} alt="" />
                  <p>167</p>
                </section>
                <section className="flex gap-1.5 cursor-pointer">
                  <img src={twitter_retweet} alt="" />
                  <p>14</p>
                </section>
                <section className="flex gap-1.5 cursor-pointer">
                  <img src={twitter_like} alt="" />
                  <p>253</p>
                </section>
                <section className="flex gap-1.5 cursor-wait">
                  <img src={twitter_analytics} alt="" />
                  <p>0</p>
                </section>
              </div>
            </div>
          </section>

          {/* right */}
          <section className="flex flex-col justify-between">
            <h1>{<BsThreeDots color="gray" />}</h1>
            <h1 className="py-2">{<FaRegBookmark color="gray" />}</h1>
          </section>
        </main>
      ))}
    </>
  );
}

export default TweetCard;

/**
 * 
 *  <div className=" border-[0.1px] border-t-0 border-gray-800 overflow-x-auto flex justify-start  px-3 py-3">
          <div className="w-20  sm:w-10">
            <img
              src={user_img}
              alt=""
              className="w-10  object-cover  rounded-full"
            />
          </div>
          <div>
            <div className="flex justify-between ml-5 items-center">
              <h1 className="font-semibold xs:hidden">{tweet?.tweet}</h1>
              <div className="  text-gray-500 items-center hidden xs:flex ">
                <div className="flex gap-2">
                  <h1 className="font-semibold text-white ">
                    {tweet?.user?.name}
                  </h1>
                  <h2 className="text-start">@{tweet?.user?.username}</h2>
                </div>
                <div>
                  <h2>
                    <LuDot />
                  </h2>
                </div>
                <h2>6h</h2>
              </div>
              <BsThreeDots />
            </div>
            <div className="flex ml-5 text-gray-500 items-center xs:hidden">
              <h2 className="">@{tweet?.user?.username}</h2>
              <h2>
                <LuDot />
              </h2>
              <h2>6h</h2>
            </div>
            <div className="ml-5">
              <p className="text-[#cfd0d1]">{tweet?.tweet} </p>
            </div>
            <div className="flex items-center gap-3 xs:gap-10 xs:justify-between ml-5 mt-3 text-sm text-gray-400">
              <section className="flex gap-1.5  cursor-pointer">
                <img src={twitter_reply} alt="" />
                <p>167</p>
              </section>
              <section className="flex gap-1.5 cursor-pointer">
                <img src={twitter_retweet} alt="" />
                <p>14</p>
              </section>
              <section className="flex gap-1.5 cursor-pointer">
                <img src={twitter_like} alt="" />
                <p>253</p>
              </section>
              <section className="flex gap-1.5 cursor-wait">
                <img src={twitter_analytics} alt="" />
                <p>0</p>
              </section>
              <p>{<FaRegBookmark color="gray" />}</p>
            </div>
          </div>
          </div>
 * 
 */
