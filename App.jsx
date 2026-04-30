import React, { useState } from "react";
import "./App.css";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import Success from "./Success";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dob: "",
    profileImage: null,
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const updateFormData = (newData) =>
    setFormData((prev) => ({ ...prev, ...newData }));
  return (
    <div className="app-shell">
      <div className="panel-wrap">
        {step === 1 && (
          <StepOne
            nextStep={nextStep}
            updateFormData={updateFormData}
            data={formData}
          />
        )}
        {step === 2 && (
          <StepTwo
            nextStep={nextStep}
            prevStep={prevStep}
            updateFormData={updateFormData}
            data={formData}
          />
        )}
        {step === 3 && (
          <StepThree
            nextStep={nextStep}
            prevStep={prevStep}
            updateFormData={updateFormData}
            data={formData}
          />
        )}
        {step === 4 && <Success data={formData} />}
      </div>
    </div>
  );
}

export default App;
