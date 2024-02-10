import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import NoContentPage from "../pages/NoContentPage";
import OwnerTile from "./OwnerTile";

function SubscriptionData() {
  const [channels, setChannels] = useState([]);

  const userData = useSelector((state) => state.auth.userData);

  const subscriberId = userData._id;

  //   console.log(channelId);

  useEffect(() => {
    const getChannels = async () => {
      try {
        const response = await axios.get(`/subscription/c/${subscriberId}`);

        if (response.data.data) {
          const mapChannels = response.data.data.flatMap(
            (channel) => channel.subscriptionList
          );

          setChannels(() => mapChannels.map((channel) => ({ ...channel })));
        }
      } catch (error) {
        console.error("Error fetching channels", error);
      }
    };
    getChannels();
  }, [subscriberId]);

  return channels.length ? (
    <div className="flex flex-wrap gap-20 overflow-hidden p-20 text-accentwhite">
      {channels.map((channel) => (
        <div
          className="flex flex-col items-center justify-center gap-4"
          key={channel._id}
        >
          <OwnerTile
            owner={channel}
            avatarClass={"object-cover w-[180px] rounded-full cursor-pointer"}
            infoDivClass={"flex flex-col"}
            fullNameClass={
              "text-center font-semibold text-[25px] cursor-pointer"
            }
            usernameClass={"text-center font-medium text-[15px] cursor-pointer"}
            showButton={true}
            buttonClass={
              "text-center font-semibold rounded-lg h-auto text-[22px] p-2"
            }
          />
        </div>
      ))}
    </div>
  ) : (
    <NoContentPage />
  );
}

export default SubscriptionData;
