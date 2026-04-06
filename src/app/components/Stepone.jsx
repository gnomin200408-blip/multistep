"use client";

import React from "react";

import { TextField } from "./TextField";
import { Header } from "./Header";
import { Next } from "./Next";

export const Stepone = ({ handleNextStep, form, setForm, error, setError }) => {
  const isFirstnameValid = (firstname) => {
    if (firstname.trim() === "") return "Нэрээ оруулна уу!";
    if (!/^[A-Za-z-]+$/.test(firstname))
      return "Нэрэнд тусгай тэмдэгт болон тоо бичиж болохгүй";
  };
  const isLastnameValid = (lastname) => {
    if (lastname.trim() === "") return "Овгоо оруулна уу!";
    if (!/^[A-Za-z-]+$/.test(lastname))
      return "Овгонд тусгай тэмдэгт болон тоо бичиж болохгүй";
  };

  const isUsernameValid = (username) => {
    if (username.trim() === "") return "Username cannot be empty...";
    if (!/^[a-z0-9_]+$/.test(username))
      return "Username cannot contain special characters or numbers.";
  };
  const errorStep = () => {
    return (
      isFirstnameValid(form.firstname) ||
      isLastnameValid(form.lastname) ||
      isUsernameValid(form.username)
    );
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
            value={form.firstname}
            onChange={(e) => {
              setForm({ ...form, firstname: e.target.value });
              setError({
                ...error,
                firstname: isFirstnameValid(e.target.value),
              });
            }}
            label="First name"
            placeholder="Placeholder"
            required={true}
            error={error.firstname}
            type="text"
          />
          <TextField
            value={form.lastname}
            onChange={(e) => {
              setForm({ ...form, lastname: e.target.value });
              setError({
                ...error,
                lastname: isLastnameValid(e.target.value),
              });
            }}
            label="Last name"
            placeholder="Placeholder"
            required={true}
            error={error.lastname}
            type="text"
          />
          <TextField
            value={form.username}
            onChange={(e) => {
              setForm({ ...form, username: e.target.value });
              if (error.username)
                setError({
                  ...error,
                  username: isUsernameValid(e.target.value),
                });
            }}
            label="Username"
            placeholder="Placeholder"
            required={true}
            error={error.username}
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
