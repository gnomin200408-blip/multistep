"use client";

import React, { useState } from "react";
import { Header } from "./Header";
import { TextField } from "./TextField";
import { Previous } from "./Previous";
import { Next } from "./Next";
import { ImageField } from "./ImageField";

export const Stepthree = ({
  handleNextStep,
  handlePrevStep,
  form,
  setForm,
  error,
  setError,
}) => {
  const isDateValid = (date) => {
    if (date === "") return "Төрсөн огноогоо оруулна уу!";
    if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(date))
      return "Огноо буруу байна.";
  };
  const isImageValid = (image) => {
    if (!image) return "Зургаа оруулна уу!";
    return null;
  };
  const errorStep = () => {
    return isDateValid(form.date) || isImageValid(form.image);
  };

  return (
    <div className="w-[480px] h-[655px] bg-[#Fff] rounded-lg p-6 flex flex-col justify-between">
      <div>
        <div>
          <Header />
        </div>
        <div className="pt-7 space-y-[1px]">
          <TextField
            value={form.date}
            onChange={(e) => {
              setForm({ ...form, date: e.target.value });
              setError({ ...error, date: isDateValid(e.target.value) });
            }}
            label="Date of birth"
            required={true}
            error={error.date}
            type="date"
          />
          <ImageField
            label="Profile image"
            required={true}
            value={form.image}
            error={error.image}
            onChange={(e) => {
              const imageValue = URL.createObjectURL(e.target.files[0]);
              setForm({ ...form, image: imageValue });
              setError({ ...error, image: isImageValid(e.target.value) });
            }}
            onCancel={() => {
              setForm({ ...form, image: "" });
              setError({ ...error, image: "Зургаа оруулна уу!" });
            }}
          />
        </div>
      </div>
      <div className="flex gap-2">
        <Previous width="128px" onClick={handlePrevStep} btnText="Back" />
        <Next
          className="w-full"
          btnText="Submit"
          slideNumber="3/3"
          width="280px"
          disabled={errorStep()}
          onClick={handleNextStep}
        />
      </div>
    </div>
  );
};
