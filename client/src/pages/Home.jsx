import { NavLink } from "react-router-dom";
import {
  BottomMenu,
  Menu,
  TopNavbar,
  TweetButton,
  TweetCard,
} from "../components";
import { GoHomeFill } from "react-icons/go";
import {
  twitter_message,
  twitter_newTweet,
  twitter_notification,
  twitter_search,
} from "../assets/svgs";

function Home() {
  return (
    <>
      <section>
        <TopNavbar />

        <div className="flex items-center text-center justify-center my-5 ">
          <NavLink
            to={"/for-you"}
            className={({ isActive }) =>
              isActive
                ? "underline underline-offset-[20px] decoration-[#1D9BF0] decoration-4 font-bold w-full"
                : "text-gray-500 w-full"
            }
          >
            For you
          </NavLink>
          <NavLink
            to={"/following"}
            className={({ isActive }) =>
              isActive
                ? " underline underline-offset-[20px] decoration-[#1D9BF0] decoration-4 font-bold w-full"
                : "text-gray-500 w-full  "
            }
          >
            Following
          </NavLink>
        </div>

        <hr className="" />

        <TweetCard />
      </section>
      <section className="flex items-center justify-around absolute bottom-0 w-full border-t border-gray-600 p-4">
        <BottomMenu icon={<GoHomeFill size={22} />} />
        <BottomMenu img={twitter_search} />
        <BottomMenu img={twitter_notification} />
        <BottomMenu img={twitter_message} />
      </section>

      <section className="absolute right-5 bottom-16 ">
        <TweetButton img={twitter_newTweet} />
      </section>
    </>
  );
}

export default Home;
