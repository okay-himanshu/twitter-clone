import React from "react";
import { FaRegBookmark } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { LuDot } from "react-icons/lu";

import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import { useAuth } from "../contexts/auth";
import URL_CONFIG from "../config/url_config";

import {
  twitter_analytics,
  twitter_like,
  twitter_reply,
  twitter_retweet,
  twitter_loader,
  twitter_like_red,
} from "../assets/svgs/index";
import UserImg from "./UserImg";

function TweetCard() {
  const [allTweets, setAllTweets] = useState([]);
  const [loader, setLoader] = useState(true);
  const [failedToFetch, setFailedToFetch] = useState(false);
  const [likedTweets, setLikedTweets] = useState([]);
  const { auth } = useAuth();

  const fetchAllTweetLists = async () => {
    try {
      const { data } = await axios.get(
        `${URL_CONFIG.API_ENDPOINTS}/tweet/all-tweet-lists`
      );
      if (data.success) {
        setAllTweets(data?.allTweets);
        setLoader(false);
      } else {
        console.log(data.message);
        setLoader(true);
        setFailedToFetch(true);
      }
    } catch (err) {
      console.log(err.message);
      setFailedToFetch(true);
    }
  };

  useEffect(() => {
    fetchAllTweetLists();
    // console.log(allTweets[0].tweet);
    // live time counter
    const interval = setInterval(fetchAllTweetLists, 60000);
    return () => clearInterval(interval);
  }, [likedTweets]);

  // Load liked tweet IDs from local storage when the component mounts
  useEffect(() => {
    const likedTweetsFromStorage = localStorage.getItem("likedTweets");
    if (likedTweetsFromStorage) {
      setLikedTweets(JSON.parse(likedTweetsFromStorage));
    }
  }, []);

  const handleLike = async (tweetId) => {
    try {
      // Send a request to like the tweet to your backend
      const response = await axios.post(
        `${URL_CONFIG.API_ENDPOINTS}/tweet/like/${tweetId}`,
        {},
        {
          headers: { Authorization: `Bearer ${auth?.token}` },
        }
      );
      // Update the likedTweets state and local storage
      if (response.data.success) {
        const updatedLikedTweets = likedTweets.includes(tweetId)
          ? likedTweets.filter((id) => id !== tweetId)
          : [...likedTweets, tweetId];
        setLikedTweets(updatedLikedTweets);
        localStorage.setItem("likedTweets", JSON.stringify(updatedLikedTweets));
      }
    } catch (error) {
      console.error("Error while liking tweet:", error);
    }
  };

  const renderTweetText = (tweet) => {
    const words = tweet.tweet.split(" ");
    const tweetContent = words.map((word, index) => {
      if (word.startsWith("#")) {
        return (
          <span key={index} className="text-[#1da1f2]">
            {word}{" "}
          </span>
        );
      } else {
        return <span key={index}>{word} </span>;
      }
    });
    return tweetContent;
  };

  return (
    <>
      {failedToFetch ? (
        <section className="flex items-center justify-center mt-10">
          <h1>⚠️ Failed To Fetch Tweets</h1>
        </section>
      ) : loader ? (
        <div className="flex flex-col gap-2 items-center justify-center mt-20">
          <img src={twitter_loader} className="w-10 " alt="loader" />
          <h1>hold tight tweets are loading...</h1>
        </div>
      ) : (
        allTweets?.map((tweet) => {
          console.log(tweet);
          return (
            <main
              key={tweet?._id}
              className="flex justify-between  border-[0.1px] border-t-0 border-gray-800 overflow-x-auto p-2"
            >
              {/* left */}
              <section className="flex  gap:10 w-11/12 md:text-[15px] text-sm">
                <div className="w-14 flex justify-center">
                  <UserImg
                    img={`https://api.dicebear.com/7.x/bottts/svg?seed=${tweet?.user?.username}`}
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
                    <h1 className="hidden xs:flex">
                      {" "}
                      {moment(tweet?.createdAt).fromNow()}
                    </h1>
                  </div>
                  <div className="flex items-center text-gray-400 ">
                    <h1 className=" xs:hidden  ">@{tweet?.user?.username} </h1>
                    <h1 className="xs:hidden ">{<LuDot />}</h1>
                    <h1 className="xs:hidden">
                      {moment(tweet?.createdAt).fromNow()}
                    </h1>
                  </div>
                  <div>
                    <p className="text-gray-300 ">{renderTweetText(tweet)}</p>
                  </div>
                  <div className="flex justify-between py-2  text-gray-400 text-sm items-center ">
                    <section className="flex gap-1.5  cursor-pointer">
                      <img src={twitter_reply} alt="" />
                      <p>0</p>
                    </section>
                    <section className="flex gap-1.5 cursor-pointer">
                      <img src={twitter_retweet} alt="" />
                      <p>0</p>
                    </section>
                    <section
                      className="flex gap-1.5 cursor-pointer"
                      onClick={() =>
                        !auth?.token
                          ? alert("Please login to like a tweet")
                          : handleLike(tweet._id)
                      }
                    >
                      <img
                        src={
                          likedTweets.includes(tweet._id)
                            ? twitter_like_red
                            : twitter_like
                        }
                        alt=""
                      />
                      <p>{tweet?.likes?.length}</p>
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
          );
        })
      )}
    </>
  );
}

export default TweetCard;
