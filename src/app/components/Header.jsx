import React from "react";

export const Header = () => {
  return (
    <div className="space-y-1">
      <img className="w-[60px] h-[60px]" src="/logo.png" alt="logo"></img>
      <h1 className="text-[26px] font-semibold text-shadow-lg">Join Us!</h1>
      <p className="text-[#8E8E8E] text-[18px] font-light">
        Please provide all current information accurately.
      </p>
    </div>
  );
};
