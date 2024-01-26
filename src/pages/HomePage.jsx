import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";

function HomePage() {
  return (
    <div className="lg:h-screen w-screen flex items-start justify-start bg-accentblack">
      <SideBar />
      <SearchBar
        placeholder="what's next ??"
        buttonText="Search"
        divClassName="lg:flex mt-[1.5%] ml-[30%] items-center justify-center text-accentwhite"
        inputClassName="bg-accentgray h-[50px] rounded-[25px] w-[500px] text-center font-semibold focus:outline-none text-[20px]"
        buttonClassName="bg-accentpink h-[50px] rounded-[25px] text-center w-[100px] font-semibold hover:text-accentblack text-[20px] focus:outline-none ml-[-35px]"
      />
    </div>
  );
}

export default HomePage;
