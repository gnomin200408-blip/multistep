"use client";

import { useState } from "react";
import { Stepone } from "./components/Stepone";
import { Steptwo } from "./components/Steptwo";
import { Stepthree } from "./components/Stepthree";
import { Stepfour } from "./components/Stepfour";

export default function Home() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    date: "",
  });
  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    date: "",
  });
  const [step, setStep] = useState(0);

  const steps = [Stepone, Steptwo, Stepthree, Stepfour];
  const StepForm = steps[step];

  const handleNextStep = () => {
    if (step < steps.length - 1) {
      setStep((step) => step + 1);
    } else return;
  };
  const handlePrevStep = () => {
    if (step > 0) {
      setStep((step) => step - 1);
    } else return;
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f4f4f4]">
      <StepForm
        handleNextStep={handleNextStep}
        handlePrevStep={handlePrevStep}
        form={form}
        setForm={setForm}
        errors={error}
        setErrors={setError}
      />
    </div>
  );
}
