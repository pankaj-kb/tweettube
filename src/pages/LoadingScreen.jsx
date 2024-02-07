import React from "react";
// import "./index.css";

const LoadingScreen = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-accentblack">
      <div className="text-4xl text-accentpink font-semibold animate-fadeInOut">
        Loading
      </div>
    </div>
  );
};

export default LoadingScreen;
