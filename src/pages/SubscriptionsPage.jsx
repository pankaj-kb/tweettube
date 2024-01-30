import { useEffect, useState } from "react";
import ChannelCard from "../components/ChannelCard";
import SearchBar from "../components/SearchBar";
import SideBar from "../components/SideBar";
import axios from "axios";
import { useSelector } from "react-redux";

function SubscriptionsPage() {
  const [channels, setChannels] = useState([]);

  const userData = useSelector((state) => state.auth.userData);

  const channelId = userData.data._id;

  //   console.log(channelId);

  useEffect(() => {
    const getChannels = async () => {
      const response = await axios.get(`/subscription/c/${channelId}`);

      const mapChannels = response.data.data.flatMap(
        (channel) => channel.subscriptionList
      );

      console.log(mapChannels)
      setChannels(mapChannels);
      console.log(channels);

      if (channels === "") {
        console.log("Channels are empty");
      }
    };
    getChannels();
  }, [channelId]);

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
        <div className="flex flex-wrap p-8 gap-12 items-center justify-center">
          {channels.map((channel) => (
            <ChannelCard key={channel._id} channel={channel} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default SubscriptionsPage;
