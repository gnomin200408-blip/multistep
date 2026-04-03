import React from "react";

export const Next = ({ btnText, slideNumber, onClick, width, disabled }) => {
  return (
    <button
      className="h-[44px] rounded-lg flex justify-center items-center cursor-pointer  gap-1 transition-all duration-100 bg-black disabled:opacity-60 "
      style={{ width }}
      disabled={disabled}
      onClick={onClick}
    >
      <label className="text-white text-sm">{btnText}</label>
      <label className="text-white text-sm">{slideNumber}</label>
      <img className="w-[24px] h-[24px] m-0" src="/icon.svg" alt="logo" />
    </button>
  );
};
