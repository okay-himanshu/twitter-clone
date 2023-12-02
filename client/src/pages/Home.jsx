import { FaXTwitter } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { RiFileListLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";

import {
  BottomMenu,
  NavTweets,
  SideMenu,
  TopNavbar,
  TweetArea,
  TweetButton,
  TweetCard,
  UserImg,
} from "../components";
import {
  twitter_message,
  twitter_newTweet,
  twitter_notification,
  twitter_search,
} from "../assets/svgs";
import { user_img } from "../assets/images";

function Home() {
  return (
    <>
      <section className="flex ">
        <div className="w-0 w-500:w-28 xl:w-72  ">
          <section className="fixed overflow-y-auto overflow-x-hidden h-screen hidden w-500:flex flex-col gap-1  items-center xl:items-start p-3 w-28 xl:p-7 xl:w-72">
            <SideMenu icon={<FaXTwitter />} />
            <SideMenu icon={<GoHomeFill />} title="Home" />
            <SideMenu icon={<FiSearch />} title="Explore" />
            <SideMenu icon={<IoNotificationsOutline />} title="Notifications" />
            <SideMenu icon={<MdOutlineEmail />} title="Messages" />
            <SideMenu icon={<RiFileListLine />} title="Lists" />
            <SideMenu icon={<IoPeopleOutline />} title="Communities" />
            <SideMenu icon={<FaXTwitter />} title="Premium" />
            <SideMenu icon={<BsPerson />} title="Profile" />
            <SideMenu icon={<CiCircleMore />} title="More" />
            <TweetButton
              img={twitter_newTweet}
              className={"p-2 h-10 w-10 text-center "}
              title={"Post"}
            />
            <div className="mt-3"></div>
            <UserImg img={user_img} />
          </section>

          <section className="w-500:hidden flex items-center justify-around absolute bottom-0 w-full border-t border-gray-600 p-4">
            <BottomMenu icon={<GoHomeFill size={22} />} />
            <BottomMenu img={twitter_search} />
            <BottomMenu img={twitter_notification} />
            <BottomMenu img={twitter_message} />
          </section>
        </div>
        <div className="flex flex-col w-[42rem]">
          <section className="w-500:hidden">
            <TopNavbar />
          </section>

          <section>
            <NavTweets />
          </section>

          <hr className="" />

          <section className="border border-gray-500 border-t-0 hidden w-500:flex">
            <TweetArea />
          </section>

          <section className="">
            <TweetCard />
            <TweetCard />
            <TweetCard />
            <TweetCard />
            <TweetCard />
            <TweetCard />
            <TweetCard />
            <TweetCard />
            <TweetCard />
            <TweetCard />
          </section>
        </div>

        <section className="absolute right-5 bottom-16 w-500:hidden ">
          <TweetButton img={twitter_newTweet} className={"p-3"} />
        </section>
      </section>
    </>
  );
}

export default Home;
