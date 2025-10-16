import { useState } from "react";
import { PineconeLogo } from "../icons/PineconeLogo";
import { RightFacingVector } from "../icons/RightFacingVector";
import { LeftFacingVector } from "../icons/LeftFacingVector";

export const StepTwo = ({ nextStep, prevStep, updateFormData, data }) => {
  const [errors, setErrors] = useState({});
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{8,12}$/;

  const handleNext = () => {
    const newErrors = {};

    if (!emailRegex.test(data.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!phoneRegex.test(data.phone)) {
      newErrors.phone = "Phone number must be 8–12 digits.";
    }

    if (!data.password) {
      newErrors.password = "Password is required.";
    } else if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) nextStep();
  };

  return (
    <div className="">
      <PineconeLogo />
      <h2 className="">Join Us! 😎</h2>
      <p className="">Please provide all current information accurately.</p>

      <div className="">
        <div>
          <label className="">
            Email <span className="">*</span>
          </label>
          <input
            type="email"
            placeholder="Your email"
            className={` ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            value={data.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="">
            Phone number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="Your phone number"
            className={` ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            value={data.phone}
            onChange={(e) => updateFormData({ phone: e.target.value })}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="font-medium text-gray-700">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Your password"
            className={`mt-1 w-full p-2.5 border rounded-lg ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            value={data.password}
            onChange={(e) => updateFormData({ password: e.target.value })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        <div>
          <label className="">
            Confirm password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Confirm password"
            className={` ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            }`}
            value={data.confirmPassword}
            onChange={(e) =>
              updateFormData({ confirmPassword: e.target.value })
            }
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button onClick={prevStep} className="">
          <LeftFacingVector />
          Back
        </button>
        <button onClick={handleNext} className="">
          Continue 2/3
          <RightFacingVector />
        </button>
      </div>
    </div>
  );
};
