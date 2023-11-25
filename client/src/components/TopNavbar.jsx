import { FaXTwitter } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

import UserImg from "./UserImg";
import { user_img } from "../assets/images";

function TopNavbar() {
  return (
    <div className="flex items-center justify-between mx-5 my-2">
      <section>
        <UserImg img={user_img} />
      </section>
      <section>
        <FaXTwitter className="h-6 w-6" />
      </section>
      <section>
        <IoSettingsOutline className="h-5 w-5" />
      </section>
    </div>
  );
}

export default TopNavbar;
