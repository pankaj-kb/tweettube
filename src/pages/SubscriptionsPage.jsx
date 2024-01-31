import { useEffect, useState } from "react";
import ChannelCard from "../components/ChannelCard";
import SearchBar from "../components/SearchBar";
import SideBar from "../components/SideBar";
import axios from "axios";
import { useSelector } from "react-redux";

function SubscriptionsPage() {
  const [channels, setChannels] = useState([]);

  const userData = useSelector((state) => state.auth.userData);

  const subscriberId = userData.data._id;

  //   console.log(channelId);

  useEffect(() => {
    const getChannels = async () => {
      try {
        const response = await axios.get(`/subscription/c/${subscriberId}`);
        console.log(response);
  
        const mapChannels = response.data.data.flatMap(
          (channel) => channel.subscriptionList
        );
  
        setChannels((prevChannels) =>
          mapChannels.map((channel) => ({ ...channel, clickToggle: false }))
        );
  
        if (mapChannels.length === 0) {
          console.log("Channels are empty");
        }
      } catch (error) {
        console.error("Error fetching channels", error);
      }
    };
    getChannels();
  }, [subscriberId]);
  

  const handleOnClick = async (clickedChannelId) => {
    try {
      const toggleSub = await axios.post(`/subscription/c/${clickedChannelId}`);
      console.log(toggleSub);

      setChannels((prevChannels) =>
        prevChannels.map((channel) =>
          channel._id === clickedChannelId
            ? { ...channel, clickToggle: !channel.clickToggle }
            : channel
        )
      );
    } catch (error) {
      console.error("Something went wrong.", error);
    }
  };

  return (
    <div className="flex bg-accentblack min-h-screen">
      <SideBar/>
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
        <div className="flex flex-wrap p-8 gap-12 items-center justify-start">
          {channels.map((channel) => (
            <ChannelCard
              key={channel._id}
              channel={channel}
              onClick={() => handleOnClick(channel._id)}
              clickToggle={channel.clickToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default SubscriptionsPage;
