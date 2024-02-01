import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

/* eslint-disable react/prop-types */
function OwnerTile({
  avatar,
  ownerName,
  ownerUsername,
  mainDivClass,
  avatarClass,
  infoDivClass,
  usernameClass,
  fullNameClass,
  buttonClass,
  showButton,
  ownerId,
}) {
  const [subscribed, setSubscribed] = useState(false);
  const userData = useSelector((state) => state.auth.userData);
  const subscriberId = userData.data._id;

  useEffect(() => {
    const checkSubscription = async () => {
      try {
        const response = await axios.get(`/subscription/c/${subscriberId}`);
        const mapChannels = response.data.data.flatMap(
          (channel) => channel.subscriptionList
        );
        setSubscribed(mapChannels.some((channel) => channel._id === ownerId));
      } catch (error) {
        console.error(error);
      }
    };

    checkSubscription();
  }, [subscriberId, ownerId]);

  const handleClick = async () => {
    try {
      const toggleSub = await axios.post(`/subscription/c/${ownerId}`);
      if (!toggleSub) {
        console.log("Cant toggle subscription.");
      }
      console.log(toggleSub);
      setSubscribed((prev) => !prev);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={mainDivClass}>
      <img src={avatar} alt="user-avatar" className={avatarClass} />
      <div className={infoDivClass}>
        <h6 className={fullNameClass}>{ownerName}</h6>
        <span className={usernameClass}>@{ownerUsername}</span>
      </div>
      {showButton ? (
        <button
          className={`${buttonClass} ${subscribed ? 'bg-accentblack' : 'bg-accentpink'}`}
          onClick={handleClick}
        >
          {subscribed ? "Subscribed" : "Subscribe"}
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default OwnerTile;
