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
  const isEmailValid = (email) => {
    if (email === "") return "И-мэйлээ оруулна уу!";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
      return "И-мэйл буруу форматтай байна.";
  };

  const isPhoneNumberValid = (phoneNumber) => {
    if (phoneNumber === "") return "Утасны дугаараа оруулна уу!";
    if (!/^\d{8}$/.test(phoneNumber))
      return "Утасны дугаар 8 оронтой тоо байх ёстой.";
  };

  const isPasswordValid = (password) => {
    if (password === "") return "Нууц үгээ оруулна уу!";
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(password)
    ) {
      const errors = [];
      if (password.length < 8) errors.push("•8 тэмдэгт байх ёстой.");
      if (!/[A-Z]/.test(password)) errors.push("•1 том үсэг агуулах ёстой.");
      if (!/[a-z]/.test(password))
        errors.push("•1 жижиг үсэн агуулагдах ёстой.");
      if (!/[0-9]/.test(password)) errors.push("•1 тоо агуулах ёстой.");
      if (!/[!@#$%^&*]/.test(password))
        errors.push("•1 тусгай тэмдэгт агуулах ёстой.");

      const PassErr =
        "Нууц үг нь дараах шаардлагуудыг хангасан байх ёстой. \n " +
        errors.join("\n");
      return PassErr;
    }
  };

  const isConfirmPasswordValid = (confirmPassword) => {
    if (confirmPassword !== form.password) return "Нууц үг таарахгүй байна.";
    if (confirmPassword === "") return "Нууц үгээ оруулна уу!";
  };
  const errorStep = () => {
    return (
      isEmailValid(form.email) ||
      isPhoneNumberValid(form.phoneNumber) ||
      isPasswordValid(form.password) ||
      isConfirmPasswordValid(form.confirmPassword)
    );
  };
  return (
    <div className="w-[480px] min-h-[655px] bg-[#Fff] rounded-lg p-6 flex flex-col justify-between">
      <div>
        <div>
          <Header />
        </div>
        <div className="pt-7 space-y-[1px]">
          <TextField
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
              setError({ ...error, email: isEmailValid(e.target.value) });
            }}
            label="Email"
            placeholder="Placeholder"
            required={true}
            error={error.email}
            type="email"
          />
          <TextField
            value={form.phoneNumber}
            onChange={(e) => {
              setForm({ ...form, phoneNumber: e.target.value });
              setError({
                ...error,
                phoneNumber: isPhoneNumberValid(e.target.value),
              });
            }}
            label="Phone number"
            placeholder="Placeholder"
            required={true}
            error={error.phoneNumber}
            type="text"
          />
          <TextField
            value={form.password}
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
              setError({ ...error, password: isPasswordValid(e.target.value) });
            }}
            label="Password"
            placeholder="Placeholder"
            required={true}
            error={error.password}
            type="password"
          />
          <TextField
            value={form.confirmPassword}
            onChange={(e) => {
              setForm({ ...form, confirmPassword: e.target.value });
              setError({
                ...error,
                confirmPassword: isConfirmPasswordValid(e.target.value),
              });
            }}
            label="Confirm password"
            placeholder="Placeholder"
            required={true}
            error={error.confirmPassword}
            type="password"
          />
        </div>
      </div>
      <div className="flex gap-2 pt-4">
        <Previous width="128px" onClick={handlePrevStep} btnText="Back" />
        <Next
          className="w-full"
          btnText="Continue"
          slideNumber="3/2"
          width="280px"
          disabled={errorStep()}
          onClick={handleNextStep}
        />
      </div>
    </div>
  );
};
