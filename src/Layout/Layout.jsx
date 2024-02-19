import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import UploadButton from "../components/UploadButton";
import { useSelector } from "react-redux";

function Layout() {
  const loginStatus = useSelector((state) => state.auth.status);

  return loginStatus ? (
    <div className="flex min-h-screen bg-accentblack">
      <div
        className="flex flex-col h-screen w-[5%] items-center justify-start
     bg-accentblack"
      >
        <SideBar />
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="sticky top-0 bg-accentblack p-4 flex items-center justify-center">
          <div className="mx-[150px] text-accentwhite">
            <SearchBar
              placeholder="what's next ??"
              buttonText="Search"
              inputClassName="bg-accentgray h-[50px] rounded-[25px] w-[400px] text-center font-medium focus:outline-none text-[20px]"
              buttonClassName="bg-accentpink h-[50px] rounded-[25px] text-center w-[100px] font-medium hover:text-accentblack text-[20px] focus:outline-accentpink ml-[-35px]"
            />
          </div>
          <div className="text-accentwhite flex items-center gap-2">
            <UploadButton />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  ) : (
    <Outlet />
  );
}

export default Layout;
