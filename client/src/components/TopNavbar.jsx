import { FaXTwitter } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";

import UserImg from "./UserImg";
import { useAuth } from "../contexts/auth";

function TopNavbar() {
  const { auth } = useAuth();
  return (
    <div className="flex items-center justify-between mx-5 my-2">
      <section>
        <UserImg
          img={`https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${auth?.user?.name}`}
        />
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
