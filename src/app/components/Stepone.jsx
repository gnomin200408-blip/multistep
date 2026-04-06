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
    if (form.firstname.trim() === "") return "Firstname cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(form.firstname))
      return "Firstname cannot contain special characters or numbers.";
  };
  const isLastnameValid = () => {
    if (form.lastname.trim() === "") return "Lastname cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(form.lastname))
      return " Lastname cannot contain special characters or numbers.";
  };

  const isUsernameValid = () => {
    if (form.username.trim() === "") return "Username cannot be empty...";
    if (!/^[a-z0-9_]+$/.test(form.username))
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
            value={form.firstname}
            onChange={(e) => {
              setForm({ ...form, firstname: e.target.value });
              if (error.firstname) {
                setError({ ...error, firstname: isFirstnameValid() });
              }
            }}
            label="First name"
            placeholder="Placeholder"
            required={true}
            error={error.firstname}
            type="text"
            onBlur={() => setError({ ...error, firstname: isFirstnameValid() })}
          />
          <TextField
            value={form.lastname}
            onChange={(e) => {
              setForm({ ...form, lastname: e.target.value });
              if (error.lastname) {
                setError({ ...error, lastname: isLastnameValid() });
              }
            }}
            label="Last name"
            placeholder="Placeholder"
            required={true}
            error={error.lastname}
            type="text"
            onBlur={() => setError({ ...error, lastname: isLastnameValid() })}
          />
          <TextField
            value={form.username}
            onChange={(e) => {
              setForm({ ...form, username: e.target.value });
              if (error.username) {
                setError({ ...error, username: isUsernameValid() });
              }
            }}
            label="Username"
            placeholder="Placeholder"
            required={true}
            error={error.username}
            type="text"
            onBlur={() => setError({ ...error, username: isUsernameValid() })}
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
