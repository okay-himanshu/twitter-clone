import { NavLink } from "react-router-dom";

function NavTweets() {
  return (
    <section className="flex items-center text-center justify-center my-5 ">
      <NavLink
        to={"/"}
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
    </section>
  );
}

export default NavTweets;
