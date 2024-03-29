import { MdSubscriptions } from "react-icons/md";
import { PiBirdFill } from "react-icons/pi";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import { sideBarLoogosClasses } from "./classesImporter";
import { BiSolidExit } from "react-icons/bi";
import LogoutButton from "./LogoutButton";
import ToolTip from "./ToolTip";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoMdHome } from "react-icons/io";
import { BsUpload } from "react-icons/bs";
import UploadButton from "./UploadButton";

function SideBar() {
  const user = useSelector((state) => state.auth.userData);
  return (
    <>
      <div className="flex items-center justify-center text-accentwhite h-20">
        <NavLink
          to={`/`}
          className={({ isActive }) =>
            [
              isActive
                ? "text-accentpink border-b-[2px] border-accentpink"
                : "",
            ].join(" ")
          }
        >
          <ToolTip text="Home">
            <IoMdHome className={sideBarLoogosClasses} />
          </ToolTip>
        </NavLink>
      </div>

      <div className="flex items-center text-accentwhite">
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

      <div className="flex items-center text-accentwhite">
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
            <PiBirdFill className={sideBarLoogosClasses} />
          </ToolTip>
        </NavLink>
      </div>

      <div className="flex items-center text-accentwhite">
      <UploadButton/>
      </div>
      
      <div className="flex items-center text-accentwhite">
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

      <div className="flex items-center text-accentwhite">
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
        className="flex items-center text-accentwhite"
        type="submit"
      >
        <ToolTip text="Logout">
          <BiSolidExit className={sideBarLoogosClasses} />
        </ToolTip>
      </LogoutButton>
    </>
  );
}

export default SideBar;

// home tab onlogo. - all videos
// profile page,
// subscriptions/channels page
// tweets page
// watch history page
// info page about the developer
