import { MdSubscriptions } from "react-icons/md";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import { sideBarLoogosClasses } from "./classesImporter";
import { BiSolidExit } from "react-icons/bi";
import LogoutButton from "./LogoutButton";
import ToolTip from "./ToolTip";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function SideBar() {
  const user = useSelector((state) => state.auth.userData);
  return (
    <div
      className="lg:flex flex-col h-screen w-[5%] items-center justify-start
     bg-accentblack"
    >
      <div className="lg:h-[10%] flex items-center">
        <ToolTip text="Home">
          <NavLink to="/">
            <h1 className="lg:text-[20px] text-accentpink font-bold cursor-pointer">
              Jaggary
            </h1>
          </NavLink>
        </ToolTip>
      </div>

      <div className="lg:flex items-center h-[15%] text-accentwhite">
        <NavLink
          to="/profile"
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
              className="rounded-full h-[70px] border-2 border-accentpink"
            />
          </ToolTip>
        </NavLink>
      </div>

      <div className="lg:flex items-center h-[15%] text-accentwhite">
        <NavLink
          to="/subscriptions"
          className={({ isActive }) =>
            [
              isActive
                ? "text-accentpink border-b-[2px] border-accentpink"
                : "",
            ].join(" ")
          }
        >
          <ToolTip text="Subscriptions">
            <MdSubscriptions className={sideBarLoogosClasses} />
          </ToolTip>
        </NavLink>
      </div>

      <div className="lg:flex items-center h-[15%] text-accentwhite">
        <NavLink
          to="/tweets"
          className={({ isActive }) =>
            [
              isActive
                ? "text-accentpink border-b-[2px] border-accentpink"
                : "",
            ].join(" ")
          }
        >
          <ToolTip text="tweets">
            <TfiCommentsSmiley className={sideBarLoogosClasses} />
          </ToolTip>
        </NavLink>
      </div>

      <div className="lg:flex items-center h-[15%] text-accentwhite">
        <NavLink
          to="/watch-history"
          className={({ isActive }) =>
            [
              isActive
                ? "text-accentpink border-b-[2px] border-accentpink"
                : "",
            ].join(" ")
          }
        >
          <ToolTip text="Watch-History">
            <FaClockRotateLeft className={sideBarLoogosClasses} />
          </ToolTip>
        </NavLink>
      </div>

      <div className="lg:flex items-center h-[15%] text-accentwhite">
        <NavLink
          to="/dev-info"
          className={({ isActive }) =>
            [
              isActive
                ? "text-accentpink border-b-[2px] border-accentpink"
                : "",
            ].join(" ")
          }
        >
          <ToolTip text="Developer Info">
            <FaCircleInfo className={sideBarLoogosClasses} />
          </ToolTip>
        </NavLink>
      </div>

      <LogoutButton
        className="lg:flex items-center h-[15%] text-accentwhite"
        type="submit"
      >
        <ToolTip text="Logout">
          <BiSolidExit className={sideBarLoogosClasses} />
        </ToolTip>
      </LogoutButton>
    </div>
  );
}

export default SideBar;

// home tab onlogo. - all videos
// profile page,
// subscriptions/channels page
// tweets page
// watch history page
// info page about the developer
