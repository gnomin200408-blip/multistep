import React from "react";

export const Previous = ({ btnText, slideNumber, onClick, error }) => {
  return (
    <button
      className="w-[128] h-[44px] bg-white rounded-lg flex justify-center items-center cursor-pointer hover:bg-[#D6D8DB] hover:border-[#CBD5E1] border border-[#CBD5E1] rounded-md transition-all duration-100"
      error={error}
      onClick={onClick}
    >
      <label className="text-black text-sm">{btnText}</label>
      <label className="text-black text-sm">{slideNumber}</label>
      <img className="w-[24px] h-[24px] m-0" src="/iconw.svg" alt="logo" />
    </button>
  );
};
