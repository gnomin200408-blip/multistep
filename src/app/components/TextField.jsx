import React from "react";

export const TextField = (label, placeholder, value, onChange, error, type) => {
  return (
    <div flex flex-col>
      <label htmlFor="input">Label</label>
      <input id="input"></input>
    </div>
  );
};
