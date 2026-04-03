"use client";

import React from "react";
import { use, useState } from "react";

import { TextField } from "./TextField";
import { Header } from "./Header";
import { Next } from "./Next";
import { Previous } from "./Previous";

export const Stepone = ({ handleNextStep, form, setForm, error, setError }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");

  const isFirstnameValid = () => {
    if (value.trim() === "")
      return "Firstname cannot be empty...",
      };
    if (!/^[A-Za-z-]+$/.test(firstname))
      return "Firstname cannot contain special characters or numbers.";
  };
  const isLastnameValid = () => {
    if (lastname.trim() === "")
      return setError({
        ...error,
        lastnameError: "Lastname cannot be empty...",
      });
    if (!/^[A-Za-z-]+$/.test(lastname))
      return " Lastname cannot contain special characters or numbers.";
  };

  const isUsernameValid = () => {
    if (username.trim() === "")
      return setErrors({
        ...errors,
        usernameError: "Username cannot be empty...",
      });
    if (!/^[a-z0-9_]+$/.test(username))
      return "Username cannot contain special characters or numbers.";
  };
  const errorStep = () => {
    return isFirstnameValid() || isLastnameValid() || isUsernameValid();
  };
  // con

  return (
    <div className="w-[480px] h-[655px] bg-[#Fff] rounded-lg p-6 flex flex-col justify-between">
      <div>
        <div>
          <Header />
        </div>
        <div className="pt-7 space-y-[1px] m-0">
          <TextField
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            label="First name"
            placeholder="Placeholder"
            required={true}
            error={isFirstnameValid()}
            type="text"
          />
          <TextField
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            label="Last name"
            placeholder="Placeholder"
            required={true}
            error={isLastnameValid()}
            type="text"
          />
          <TextField
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            label="Username"
            placeholder="Placeholder"
            required={true}
            error={isUsernameValid()}
            type="text"
          />
        </div>
      </div>
      <div className=" flex gap-2 w-full">
        <Next
          className="w-full"
          btnText="Continue"
          slideNumber="3/1"
          width="416px"
          disabled={!!errorStep()}
          onClick={handleNextStep}
        />
      </div>
    </div>
  );
};
