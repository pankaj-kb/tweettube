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
    <div className="flex flex-col overflow-hidden text-accentwhite
     h-screen w-screen items-start justify-center gap-[10%] md:flex-row md:flex-wrap md:gap-[10%] md:items-center md:justify-center">
      {channels.map((channel) => (
        <div
          className="flex items-center justify-center gap-4 md:flex-col"
          key={channel._id}
        >
          <OwnerTile
            owner={channel}
            avatarClass={
              "object-contain w-[80px] h-[80px] rounded-full cursor-pointer md:w-[180px] md:h-[180px]"
            }
            infoDivClass={"flex flex-col"}
            fullNameClass={
              "text-center font-semibold text-[20px] cursor-pointer"
            }
            usernameClass={"text-center font-medium text-[13px] cursor-pointer"}
            showButton={true}
            buttonClass={
              "text-center font-semibold rounded-lg h-auto text-[20px] p-2"
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
