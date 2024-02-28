import { NavLink, Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import UploadButton from "../components/UploadButton";
import { useSelector } from "react-redux";
import ToolTip from "../components/ToolTip";

function Layout() {
  const loginStatus = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.userData);

  return loginStatus ? (
    <div className="flex max-h-screen max-w-screen bg-accentblack overflow-hidden">
      <div className="absolute top-2 left-2 text-[40px] max-w-screen hidden md:block">
        <ToolTip text="Home">
          <NavLink to="/">
            <h1 className="text-[20px] text-accentpink font-bold cursor-pointer md:text-[40px] md:p-2">
              Jaggary
            </h1>
          </NavLink>
        </ToolTip>
      </div>
      <div
        className="flex flex-row border-t-4 border-opacity-65 border-accentpink 
      rounded-t-lg bg-accentgray gap-8 
      justify-center absolute bottom-0 items-center w-[100%] h-20 z-50"
      >
        <SideBar />
      </div>
      <div className="flex flex-col justify-center overflow-y-auto">
        <div className="absolute top-0 p-4 flex items-center z-50 md:left-[35%]">
          <div className="text-accentwhite flex md:justify-center items-center gap-2 md:gap-x-16">
            <div className="text-accentwhite flex justify-center items-center">
              <SearchBar
                placeholder="what's next ??"
                buttonText="Search"
                inputClassName="bg-accentgray h-[50px] rounded-[25px] w-[70%] text-center font-medium 
              focus:outline-none text-[20px] md:w-[400px]"
                buttonClassName="bg-accentpink h-[50px] rounded-[25px] text-center w-[100px] font-medium 
              hover:text-accentblack text-[20px] 
              focus:outline-accentpink ml-[-35px]"
              />
            </div>
            <div className="flex items-center text-accentwhite h-20">
              <NavLink
                to={`/profile/${user.username}`}
                className={({ isActive }) =>
                  [
                    isActive
                      ? "text-accentpink border-b-[2px] border-accentpink"
                      : "",
                  ].join(" ")
                }
              >
                <ToolTip text="Profile">
                  {/* <CgProfile className={sideBarLoogosClasses} /> */}
                  <img
                    src={user.avatar}
                    alt="user-avatar"
                    className="rounded-full h-[50px] object-contain border-2 border-accentpink"
                  />
                </ToolTip>
              </NavLink>
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
