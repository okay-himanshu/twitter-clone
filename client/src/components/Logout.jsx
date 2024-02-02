import { RiLogoutCircleRFill } from "react-icons/ri";

import { useAuth } from "../contexts/auth";
function Logout() {
  const { handleLogout } = useAuth();

  return (
    <div
      onClick={handleLogout}
      className="flex items-center justify-center   xl:justify-between xl:px-4 xl:border border-[#ffffff1c] hover:bg-[#ffffff1c] duration-150 rounded-full py-1 xl:py-4 text-white cursor-pointer"
    >
      <p className="hidden xl:flex">Logout</p> <RiLogoutCircleRFill size={30} />
    </div>
  );
}

export default Logout;
