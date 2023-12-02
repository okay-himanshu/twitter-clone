import { UserImg } from ".";
import { user_img } from "../assets/images";
import {
  twitter_align,
  twitter_gif,
  twitter_image,
  twitter_location,
} from "../assets/svgs";

function TweetArea() {
  return (
    <>
      <section className="flex w-full ml-4">
        <div className="w-1/12 mt-3">
          <UserImg img={user_img} />
        </div>
        <div className="w-[90%] mt-3">
          <textarea
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
              <button className="bg-[#1D9BF0] px-6 py-2 text-white rounded-full">
                Post
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TweetArea;
