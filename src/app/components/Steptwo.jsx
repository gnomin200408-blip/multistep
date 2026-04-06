"use client";

import React from "react";
import { use, useState } from "react";

import { TextField } from "./TextField";
import { Header } from "./Header";
import { Next } from "./Next";
import { Previous } from "./Previous";

export const Steptwo = ({
  handleNextStep,
  handlePrevStep,
  form,
  setForm,
  error,
  setError,
}) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const isEmailValid = () => {
    if (form.email === "") return "Email cannot be empty...";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email))
      return "Email cannot contain special characters or numbers.";
  };
  const isPhoneNumberValid = () => {
    if (form.phoneNumber === "") return "Phone number cannot be empty...";
    if (!/^\d{8}$/.test(form.phoneNumber))
      return "Phone number cannot contain special characters or numbers.";
  };

  const isPasswordValid = () => {
    if (form.password === "") return "Password cannot be empty...";
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(form.password))
      return "Password cannot contain special characters or numbers.";
  };
  const isConfirmPasswordValid = () => {
    if (form.confirmPassword !== form.password)
      return "Passwords do not match. Please try again";
    if (form.confirmPassword === "")
      return "Confirm password cannot be empty...";
  };
  const errorStep = () => {
    return (
      isEmailValid() ||
      isPhoneNumberValid() ||
      isPasswordValid() ||
      isConfirmPasswordValid()
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
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
            label="Email"
            placeholder="Placeholder"
            required={true}
            error={error.email}
            type="text"
            onBlur={() => setError({ ...error, email: isEmailValid() })}
          />
          <TextField
            value={form.phoneNumber}
            onChange={(e) => {
              setForm({ ...form, phoneNumber: e.target.value });
            }}
            label="Phone number"
            placeholder="Placeholder"
            required={true}
            error={error.phoneNumber}
            type="text"
            onBlur={() =>
              setError({ ...error, phoneNumber: isPhoneNumberValid() })
            }
          />
          <TextField
            value={form.password}
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
            }}
            label="Password"
            placeholder="Placeholder"
            required={true}
            error={error.password}
            type="text"
            onBlur={() => setError({ ...error, password: isPasswordValid() })}
          />
          <TextField
            value={form.confirmPassword}
            onChange={(e) => {
              setForm({ ...form, confirmPassword: e.target.value });
            }}
            label="Confirm password"
            placeholder="Placeholder"
            required={true}
            error={error.confirmPassword}
            type="text"
            onBlur={() =>
              setError({ ...error, confirmPassword: isConfirmPasswordValid() })
            }
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
          disabled={!!errorStep()}
          onClick={handleNextStep}
        />
      </div>
    </div>
  );
};
