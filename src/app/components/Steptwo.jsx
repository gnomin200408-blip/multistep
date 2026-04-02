"use client";

import React from "react";
import { use, useState } from "react";

import { TextField } from "./TextField";
import { Header } from "./Header";
import { Next } from "./Next";
import { Previous } from "./Previous";

export const Steptwo = ({ handleNextStep, handlePrevStep }) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const isEmailValid = () => {
    if (email === "") return "Firstname cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(email))
      return "Email cannot contain special characters or numbers.";
  };
  const isPhoneNumberValid = () => {
    if (phoneNumber === "") return "Lastname cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(phoneNumber))
      return "Phone number cannot contain special characters or numbers.";
  };

  const isPasswordValid = () => {
    if (password === "") return "Username cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(password))
      return "Password cannot contain special characters or numbers.";
  };
  const isConfirmPasswordValid = () => {
    if (!confirmPassword === password)
      return "Passwords do not match. Please try again";
    if (confirmPassword === "") return "Confirm password cannot be empty...";
  };
  const errorStep = () => {
    return (
      isEmailValid() ||
      isPhoneNumberValid() ||
      isPasswordValid() ||
      isConfirmPasswordValid
    );
  };
  return (
    <div className="w-[480px] h-[655px] bg-[#Fff] rounded-lg p-6 flex flex-col justify-between">
      <div>
        <div>
          <Header />
        </div>
        <div className="pt-7 space-y-[1px]">
          <TextField
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            label="Email"
            placeholder="Placeholder"
            required={true}
            error={isEmailValid()}
          />
          <TextField
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            label="Phone number"
            placeholder="Placeholder"
            required={true}
            error={isPhoneNumberValid()}
          />
          <TextField
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label="Password"
            placeholder="Placeholder"
            required={true}
            error={isPasswordValid()}
          />
          <TextField
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            label="Confirm password"
            placeholder="Placeholder"
            required={true}
            error={isConfirmPasswordValid()}
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
