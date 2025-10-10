import { useState } from "react";

export const StepTwo = ({ nextStep, prevStep, updateFormData, data }) => {
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    const newErrors = {};
    if (!data.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!data.password) newErrors.password = "Password is required";
    if (data.password !== data.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) nextStep();
  };

  return (
    <div className="flex flex-col bg-white p-10 ro /unded-2xl w-[380px] shadow-md">
      <h2 className="text-xl font-semibold">Join Us! 😎</h2>
      <p className="text-gray-500 text-sm mb-6">Provide your login details</p>

      <div className="flex flex-col gap-4">
        <div>
          <label>Email</label>
          <input
            className="border rounded-lg w-full p-2 mt-1"
            type="email"
            value={data.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <label>Password</label>
          <input
            className="border rounded-lg w-full p-2 mt-1"
            type="password"
            value={data.password}
            onChange={(e) => updateFormData({ password: e.target.value })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            className="border rounded-lg w-full p-2 mt-1"
            type="password"
            value={data.confirmPassword}
            onChange={(e) =>
              updateFormData({ confirmPassword: e.target.value })
            }
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="border border-gray-400 py-2 px-4 rounded-lg hover:bg-gray-50"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800"
        >
          Continue to Step 3
        </button>
      </div>
    </div>
  );
};
