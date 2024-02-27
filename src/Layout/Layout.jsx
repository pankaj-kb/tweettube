import { NavLink, Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import UploadButton from "../components/UploadButton";
import { useSelector } from "react-redux";
import Tooltip from "../components/ToolTip";

function Layout() {
  const loginStatus = useSelector((state) => state.auth.status);

  return loginStatus ? (
    <div className="flex max-h-screen max-w-screen bg-accentblack overflow-hidden">
      <div className="flex absolute top-2 left-2 text-[40px] max-w-screen">
        <Tooltip text="Home">
          <NavLink to="/">
            <h1 className="text-[20px] text-accentpink font-bold cursor-pointer">
              Jaggary
            </h1>
          </NavLink>
        </Tooltip>
      </div>
      <div
        className="flex flex-row border-t-4 border-opacity-65 border-accentpink 
      rounded-t-lg bg-accentgray gap-8 
      justify-center absolute bottom-0 items-center w-[100%] h-20 z-50"
      >
        <SideBar />
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="absolute top-0 bg-accentblack p-4 flex items-center z-50 justify-center">
          <div className="text-accentwhite flex gap-4">
            <SearchBar
              placeholder="what's next ??"
              buttonText="Search"
              inputClassName="bg-accentgray h-[50px] rounded-[25px] w-[80%] text-center font-medium focus:outline-none text-[20px]"
              buttonClassName="bg-accentpink h-[50px] rounded-[25px] text-center w-[100px] font-medium hover:text-accentblack text-[20px] focus:outline-accentpink ml-[-35px]"
            />
            <div className="text-accentwhite flex flex-col z-50 items-center gap-2">
              <UploadButton />
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  ) : (
    <Outlet />
    // ""
  );
}

export default Layout;
