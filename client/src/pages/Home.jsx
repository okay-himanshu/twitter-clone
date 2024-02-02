/*ICONS */
import { FaXTwitter } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { RiFileListLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { IoMdLogIn } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

import {
  BottomMenu,
  MobileViewTweetArea,
  NavTweets,
  ReminderButton,
  SideMenu,
  TopNavbar,
  TweetArea,
  TweetButton,
  TweetCard,
  UserImg,
  Logout,
} from "../components";
import {
  twitter_message,
  twitter_newTweet,
  twitter_notification,
  twitter_search,
} from "../assets/svgs";
import { useAuth } from "../contexts/auth";
import { useState } from "react";

function Home() {
  const [tweetModal, setTweetModal] = useState(false);
  const { auth } = useAuth();
  const navigate = useNavigate();

  const handleOpenTweetModal = () => setTweetModal(true);

  console.log(auth);
  console.log(tweetModal);
  return (
    <>
      <section className="flex ">
        <div className="w-0 w-500:w-28 w-600:w-24 sm:w-20 md:w-20 lg:w-20 xl:w-72  ">
          <section className="fixed overflow-y-auto overflow-x-hidden h-screen hidden w-500:flex flex-col   items-center xl:items-start p-3 w-20 xl:p-5 xl:w-72">
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
            <SideMenu
              icon={<RiFileListLine />}
              title="Lists"
              redirectTo={`/`}
            />
            <SideMenu
              icon={<IoPeopleOutline />}
              title="Communities"
              redirectTo={`/`}
            />
            <SideMenu icon={<FaXTwitter />} title="Premium" redirectTo={`/`} />
            <SideMenu
              icon={<BsPerson />}
              title="Profile"
              redirectTo={`${auth?.user ? "/profile " : "/signup_login"}`}
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
                <div className="relative flex justify-between items-center">
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
            {auth?.token && (
              <div className="w-full mt-2">
                <Logout />
              </div>
            )}
          </section>

          <section className="w-500:hidden flex items-center justify-around fixed bottom-0 w-full border-t bg-black border-gray-600 p-4">
            <BottomMenu icon={<GoHomeFill size={22} />} />
            <BottomMenu img={twitter_search} />
            <BottomMenu img={twitter_notification} />
            <BottomMenu img={twitter_message} />
          </section>
        </div>
        <div className="flex flex-col  w-[42rem]">
          <section className="w-500:hidden">
            <TopNavbar />
          </section>

          <section className="border-[0.1px] border-b border-t-0 border-r-0 border-l-0 border-gray-800">
            <NavTweets />
          </section>

          <section className="border-[0.1px]    border-gray-800 hidden w-500:flex">
            <TweetArea />
          </section>

          <section className={`${tweetModal ? "hidden" : "visible"}`}>
            <TweetCard />
          </section>
        </div>

        <section className="fixed  right-5 bottom-16 w-500:hidden ">
          <TweetButton
            img={twitter_newTweet}
            className={"p-3"}
            handleClick={handleOpenTweetModal}
          />
        </section>

        <MobileViewTweetArea status={tweetModal} setStatus={setTweetModal} />

        {/* <UserProfile /> */}
      </section>
    </>
  );
}

export default Home;
