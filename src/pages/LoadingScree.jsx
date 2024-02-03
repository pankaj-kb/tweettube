import React from "react";
// import "./index.css";

const LoadingScreen = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-800">
      <div className="text-4xl text-white font-semibold animate-fadeInOut">
        Loading
      </div>
    </div>
  );
};

export default LoadingScreen;
