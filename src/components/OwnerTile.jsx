import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function OwnerTile({
  avatar,
  ownerName,
  ownerUsername,
  avatarClass,
  infoDivClass,
  usernameClass,
  fullNameClass,
  buttonClass,
  showButton,
  ownerId,
}) {
  const [subscribed, setSubscribed] = useState(false);
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const subscriberId = userData._id;

  useEffect(() => {
    const checkSubscription = async () => {
      try {
        const response = await axios.get(`/subscription/c/${subscriberId}`);
        if (response.data.data) {
          const mapChannels = response.data.data.flatMap(
            (channel) => channel.subscriptionList
          );
          setSubscribed(mapChannels.some((channel) => channel._id === ownerId));
        } else {
          setSubscribed(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkSubscription();
  }, [subscriberId, ownerId]);

  const handleSubscribe = async () => {
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

  const handleProfileClick = async () => {
    try {
      navigate(`/profile/${ownerUsername}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <img
        src={avatar}
        alt="user-avatar"
        className={avatarClass}
        onClick={handleProfileClick}
      />
      <div className={infoDivClass} onClick={handleProfileClick}>
        <h6 className={fullNameClass}>{ownerName}</h6>
        <span className={usernameClass}>@{ownerUsername}</span>
      </div>
      {showButton ? (
        <button
          className={`${buttonClass} ${
            subscribed ? "bg-accentgray" : "bg-accentpink"
          }`}
          onClick={handleSubscribe}
        >
          {subscribed ? "Subscribed" : "Subscribe"}
        </button>
      ) : (
        ""
      )}
    </>
  );
}

export default OwnerTile;
