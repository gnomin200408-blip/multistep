"use client";

import { useState } from "react";
import { Stepone } from "./components/Stepone";
import { Steptwo } from "./components/Steptwo";
import { Stepthree } from "./components/Stepthree";
import { Stepfour } from "./components/Stepfour";

export default function Home() {
  const [step, setStep] = useState(0);
  const steps = [Stepone, Steptwo, Stepthree, Stepfour];
  const StepForm = steps[step];
  const handleNextStep = () => {
    if (step < steps.length - 1) {
      setStep((prev) => prev + 1);
    } else retutn;
  };

  const handlePrevStep = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
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
