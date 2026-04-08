import React from "react";

export const TextField = ({
  label,
  placeholder,
  value,
  onChange,
  error,
  type,
  required = false,
  onBlur,
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-[#334155] text-sm;" htmlFor="input">
        {label} {required && <span className="text-[#E14942]">*</span>}
      </label>
      <input
        className={`w-full h-[44px] border outline-none focus:ring-1 ${error ? "focus:ring-[#E14942] focus:border-transparent rounded-lg p-2 border-[#E14942]" : "focus:ring-[#0CA5E9] focus:border-transparent rounded-lg p-2 border-[#CBD5E1]"} `}
        placeholder={placeholder}
        type={type}
        id="input"
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      ></input>
      {error && (
        <div className="text-[#E14942] whitespace-pre-line text-[14px]">
          {error}
        </div>
      )}
    </div>
  );
};
