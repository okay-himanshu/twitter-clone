import { NavLink } from "react-router-dom";

function SideMenu({ icon, title, redirectTo }) {
  return (
    <>
      <NavLink
        to={`${redirectTo}`}
        className={
          "text-[28px] flex items-center gap-4 p-3 rounded-full hover:bg-[#252525b0] duration-150"
        }
      >
        {icon}
        <p className="hidden xl:flex text-lg ">{title}</p>
      </NavLink>
    </>
  );
}

export default SideMenu;
