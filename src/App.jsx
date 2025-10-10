import { useState } from "react";
import "./App.css";
import { StepOne } from "./components/StepOne";
import { StepTwo } from "./components/StepTwo";
import { StepThree } from "./components/StepThree";
import { Success } from "./components/Success";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const updateFormData = (newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
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
  );
}

export default App;
