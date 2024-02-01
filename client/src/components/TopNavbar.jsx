import { FaXTwitter } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";

import UserImg from "./UserImg";
import { useAuth } from "../contexts/auth";
import { useNavigate } from "react-router-dom";

function TopNavbar() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between mx-5 my-2">
      <section
        onClick={() => navigate(`${auth?.user ? "/profile" : "/signup_login"}`)}
        className="cursor-pointer"
      >
        {auth?.user ? (
          <UserImg
            img={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${auth?.user?.username}`}
          />
        ) : (
          <BsPerson size={25} />
        )}
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
