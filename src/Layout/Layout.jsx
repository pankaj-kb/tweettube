import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";

function Layout() {
  return (
    <div className="flex bg-accentblack min-h-screen">
      <SideBar />
      <div className="flex flex-col flex-1">
        <div className="sticky top-0 bg-accentblack p-4">
          <SearchBar
            placeholder="what's next ??"
            buttonText="Search"
            divClassName="lg:flex items-center justify-center text-accentwhite"
            inputClassName="bg-accentgray h-[50px] rounded-[25px] w-[400px] text-center font-medium focus:outline-none text-[20px]"
            buttonClassName="bg-accentpink h-[50px] rounded-[25px] text-center w-[100px] font-medium hover:text-accentblack text-[20px] focus:outline-accentpink ml-[-35px]"
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;