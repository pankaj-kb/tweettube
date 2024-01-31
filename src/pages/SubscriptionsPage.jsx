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
  );
}
export default SubscriptionsPage;
