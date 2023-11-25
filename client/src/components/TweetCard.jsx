import React from "react";
import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { IoIosStats } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";

import { user_img } from "../assets/images";

function TweetCard() {
  return (
    <>
      <div className="flex justify-between px-5 py-3">
        <div className="w-20">
          <img src={user_img} alt="" className="h-10 w-10 rounded-full" />
        </div>
        <div>
          <div className="flex justify-between ml-5">
            <h1 className="font-bold">Nitish Chaudhary</h1>
            <h1>***</h1>
          </div>
          <div className="flex ml-5 text-gray-500">
            <h2 className="">@NitishCH12</h2>
            <h2>-</h2>
            <h2>6h</h2>
          </div>
          <div className="ml-5">
            <p>
              serious question: what can you learn from udemy that you can't
              learn from youtube?{" "}
            </p>
          </div>
          <div className="flex gap-5 ml-5">
            <p>
              <FaRegComment />
            </p>
            <p>
              <FaRetweet />
            </p>
            <p>{<FaRegHeart />}</p>
            <p>{<IoIosStats />}</p>
            <p>{<FaRegBookmark />}</p>
          </div>
        </div>
        {/* <div>***</div> */}
      </div>
      <hr />
    </>
  );
}

export default TweetCard;
