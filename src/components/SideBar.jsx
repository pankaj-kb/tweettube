import { CgProfile } from "react-icons/cg";
import { MdSubscriptions } from "react-icons/md";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import { sideBarLoogosClasses } from "./classesImporter";
// import Logo from "./Logo";

function SideBar() {
  return (
    <div className="lg:flex flex-col h-screen w-[5%] items-center justify-start bg-accentblack">
      <div className="lg:h-[10%] flex items-center">
        <h1 className="lg:text-[20px] text-accentpink font-bold cursor-pointer">Jaggary</h1>
      </div>
      <div className="lg:flex items-center h-[15%] text-accentwhite">
        <CgProfile className={sideBarLoogosClasses} />
      </div>
      <div className="lg:flex items-center h-[15%] text-accentwhite">
        <MdSubscriptions className={sideBarLoogosClasses} />
      </div>
      <div className="lg:flex items-center h-[15%] text-accentwhite">
        <TfiCommentsSmiley className={sideBarLoogosClasses} />
      </div>
      <div className="lg:flex items-center h-[15%] text-accentwhite">
        <FaClockRotateLeft className={sideBarLoogosClasses} />
      </div>
      <div className="lg:flex items-center h-[15%] text-accentwhite">
        <FaCircleInfo className={sideBarLoogosClasses} />
      </div>
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
