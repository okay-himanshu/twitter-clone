import {
  BottomMenu,
  Menu,
  NavTweets,
  TopNavbar,
  TweetArea,
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
        <section>
          <TopNavbar />
        </section>

        <section>
          <NavTweets />
        </section>

        <hr className="" />

        <section className="border border-gray-500 border-t-0">
          <TweetArea />
        </section>

        <section>
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
      </section>
    </>
  );
}

export default Home;
