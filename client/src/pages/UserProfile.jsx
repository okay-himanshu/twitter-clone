import {
  twitter_analytics,
  twitter_like,
  twitter_reply,
  twitter_retweet,
  twitter_loader,
} from "../assets/svgs/index";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";

import { FaRegBookmark, FaXTwitter } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { CiCircleMore, CiLogin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { RiFileListLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { IoMdLogIn } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import moment from "moment";

import { ReminderButton, SideMenu, TweetButton, UserImg } from "../components";
import { twitter_newTweet } from "../assets/svgs";
import { useAuth } from "../contexts/auth";
import URL_CONFIG from "../config/url_config";
import { useEffect, useState } from "react";
import { LuDot } from "react-icons/lu";

function UserProfile() {
  const [userPost, setUserPost] = useState([]);
  const [loader, setLoader] = useState(false);
  const [failedToFetch, setFailedToFetch] = useState(false);

  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  const joinedDate = auth?.user?.createdAt;
  const parsedDate = moment(joinedDate);
  const formattedDate = parsedDate.format("MMMM YYYY");

  // console.log(auth.user);

  console.log(userPost?.tweets?.length);

  const tweetCount = async () => {
    try {
      const { data } = await axios.get(
        `${URL_CONFIG.API_ENDPOINTS}/tweet/tweet-count/${auth?.user?._id}`
      );
      console.log(data);
      if (data) {
        // setUserPost(data?.tweet?.tweets);
        setUserPost(data?.tweet);
      } else {
        console.log("something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    tweetCount();
    // live time counter
    const interval = setInterval(tweetCount, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    const ask = window.confirm("Do you really want to logout?");
    if (!ask) return;
    if (ask) {
      localStorage.removeItem("auth");
      localStorage.removeItem("likedTweets");
      setAuth(null);
      navigate("/");
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
    <div className="flex">
      <div className="w-0 w-500:w-28 w-600:w-24 sm:w-20 md:w-20 lg:w-20 xl:w-72  ">
        <section className=" fixed overflow-y-auto overflow-x-hidden h-screen hidden w-500:flex flex-col   items-center xl:items-start p-3 w-20 xl:p-5 xl:w-72">
          <SideMenu icon={<FaXTwitter />} redirectTo={`/`} />
          <SideMenu icon={<GoHomeFill />} title="Home" redirectTo={`/`} />
          <SideMenu icon={<FiSearch />} title="Explore" redirectTo={`/`} />
          <SideMenu
            icon={<IoNotificationsOutline />}
            title="Notifications"
            redirectTo={`/`}
          />
          <SideMenu
            icon={<MdOutlineEmail />}
            title="Messages"
            redirectTo={`/`}
          />
          <SideMenu icon={<RiFileListLine />} title="Lists" redirectTo={`/`} />
          <SideMenu
            icon={<IoPeopleOutline />}
            title="Communities"
            redirectTo={`/`}
          />
          <SideMenu icon={<FaXTwitter />} title="Premium" redirectTo={`/`} />
          <SideMenu
            icon={<BsPerson />}
            title="Profile"
            redirectTo={`/profile`}
          />
          <SideMenu icon={<CiCircleMore />} title="More" redirectTo={`/`} />
          <TweetButton
            img={twitter_newTweet}
            className={"p-2 h-10 w-10 text-center "}
            title={"Post"}
          />
          <div className="mt-3"></div>
          <div className="w-full p-2 hover:bg-[#ffffff1a] duration-150 cursor-pointer rounded-full">
            {auth?.user ? (
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <UserImg
                    img={`https://api.dicebear.com/7.x/bottts/svg?seed=${auth?.user?.username}`}
                  />
                  <div className="text-[15px] hidden xl:flex flex-col">
                    <h1 className="font-semibold">{auth?.user?.name}</h1>
                    <h1 className="font-thin">@{auth?.user?.username}</h1>
                  </div>
                </div>
                <div className="hidden xl:flex">
                  <BsThreeDots />
                </div>
              </div>
            ) : (
              <ReminderButton
                handleClick={() => navigate("/signup_login")}
                title={"Login"}
                icon={<IoMdLogIn size={20} />}
              />
            )}
          </div>
        </section>
      </div>

      <main className=" w-[42rem] border-[0.1px] border-l-0 border-gray-800">
        {" "}
        <nav className="flex items-center gap-8 p-2">
          <NavLink to="/">
            <IoMdArrowRoundBack />
          </NavLink>
          <div className="">
            <h1 className="font-bold">{auth?.user?.name}</h1>
            <p className="text-xs text-gray-400">
              {userPost?.tweets?.length} Posts
            </p>
          </div>
        </nav>
        <section className="bg-white h-44 w-full relative flex  justify-between">
          <div className="absolute -bottom-12  flex  justify-between w-full items-center px-2 ">
            <img
              src={`https://api.dicebear.com/7.x/bottts/svg?seed=${auth?.user?.username}`}
              className="h-20 w-20 xs:h-28 xs:w-28 rounded-full  border-black border-[3px]"
            />
            <button
              onClick={handleLogout}
              className="text-gray-300 border  rounded-full px-3 py-1 font-bold border-gray-500 mt-16 hover:bg-[#ffffff2f] "
            >
              Logout
            </button>
          </div>
        </section>
        <section className="mt-14 ml-4 text-sm pb-5">
          <h1 className="font-bold text-xl">{auth?.user?.name}</h1>
          <p className="text-gray-500 text-sm">@{auth?.user?.username}</p>
          <p className="flex items-center gap-1 mt-3 text-gray-500 ">
            <IoCalendarOutline className="text-gray-500" /> Joined{" "}
            {formattedDate}
          </p>
          <div className="mt-2 text-sm flex items-center gap-3">
            <h1 className="flex items-center gap-1">
              <p>0</p> <p className="text-gray-500">following</p>
            </h1>
            <h1 className="flex items-center gap-1">
              <p>0</p> <p className="text-gray-500">followers</p>
            </h1>
          </div>
        </section>
        <hr className="brightness-[0.3] pb-3" />
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
          userPost?.tweets?.map((tweet) => (
            <main
              key={tweet?._id}
              className="flex justify-between  border-[0.1px] border-t-0 border-gray-800 overflow-x-auto p-2"
            >
              {/* left */}
              <section className="flex  gap:10 w-11/12 md:text-base text-sm">
                <div className="w-14 flex justify-center">
                  <UserImg
                    img={`https://api.dicebear.com/7.x/bottts/svg?seed=${auth?.user?.username}`}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between w-full">
                  <div className="flex items-center text-gray-500 ">
                    <h1 className="font-semibold text-white ">
                      {auth?.user?.name}
                    </h1>
                    <h1 className="ml-2  hidden xs:flex ">
                      @{auth?.user?.username}{" "}
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
                    <section className="flex gap-1.5 cursor-pointer">
                      <img src={twitter_like} alt="" />
                      <p>0</p>
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
          ))
        )}
      </main>
    </div>
  );
}

export default UserProfile;
