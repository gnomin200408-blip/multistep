"use client";

import { useState } from "react";
import { Stepone } from "./components/Stepone";
import { Steptwo } from "./components/Steptwo";
import { Stepthree } from "./components/Stepthree";

export default function Home() {
  const [step, setStep] = useState(0);
  const steps = [Stepone, Steptwo, Stepthree];
  const StepForm = steps[step];
  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handlePrevStep = () => {
    setStep(step - 1);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f4f4f4]">
      <StepForm
        handleNextStep={handleNextStep}
        handlePrevStep={handlePrevStep}
      />
    </div>
  );
}
