import React, { useState } from "react";
import { Header } from "./Header";
import { TextField } from "./TextField";
import { Previous } from "./Previous";
import { Next } from "./Next";

export const Stepthree = ({ handleNextStep, handlePrevStep }) => {
  const [date, setDate] = useState("");

  const isDateValid = () => {
    if (date === "") return "Date cannot be empty...";
    if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(date))
      return "Invalid birth date";
  };
  return (
    <div className="w-[480px] h-[655px] bg-[#Fff] rounded-lg p-6 flex flex-col justify-between">
      <div>
        <div>
          <Header />
        </div>
        <div className="pt-7 space-y-[1px]">
          <TextField
            value={date}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            label="Email"
            placeholder="Placeholder"
            required={true}
            error={isDateValid()}
          />
        </div>
      </div>
      <div className="flex gap-2">
        <Previous width="128px" onClick={handlePrevStep} btnText="Back" />
        <Next
          className="w-full"
          btnText="Continue"
          slideNumber="3/2"
          width="280px"
          disabled={errorStep}
          onClick={handleNextStep}
        />
      </div>
    </div>
  );
};
