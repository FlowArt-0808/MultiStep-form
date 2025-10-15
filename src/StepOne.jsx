import { useState } from "react";
import { PineconeLogo } from "../icons/PineconeLogo";

export const StepOne = ({ nextStep, updateFormData, data }) => {
  const [errors, setErrors] = useState({});
  const nameRegex = /^[A-Za-z]+$/;

  const handleNext = () => {
    const newErrors = {};

    if (!data.firstName) {
      newErrors.firstName = "First name is required.";
    } else if (!nameRegex.test(data.firstName)) {
      newErrors.firstName =
        "First name cannot contain special characters or numbers.";
    }

    if (!data.lastName) {
      newErrors.lastName = "Last name is required.";
    } else if (!nameRegex.test(data.lastName)) {
      newErrors.lastName =
        "Last name cannot contain special characters or numbers.";
    }

    if (!data.username) {
      newErrors.username = "Username is required.";
    } else if (
      ["amgaa", "john", "admin"].includes(data.username.toLowerCase())
    ) {
      newErrors.username =
        "This username is already taken. Please choose another one.";
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
            First name <span className="">*</span>
          </label>
          <input
            type="text"
            className={` ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            }`}
            value={data.firstName}
            onChange={(e) => updateFormData({ firstName: e.target.value })}
          />
          {errors.firstName && <p className="">{errors.firstName}</p>}
        </div>

        <div>
          <label className="">
            Last name <span className="">*</span>
          </label>
          <input
            type="text"
            className={` ${errors.lastName ? "" : ""}`}
            value={data.lastName}
            onChange={(e) => updateFormData({ lastName: e.target.value })}
          />
          {errors.lastName && <p className="">{errors.lastName}</p>}
        </div>

        <div>
          <label className="">
            Username <span className="">*</span>
          </label>
          <input
            type="text"
            className={`mt-1 w-full p-2.5 border rounded-lg ${
              errors.username ? "border-red-500" : "border-gray-300"
            }`}
            value={data.username}
            onChange={(e) => updateFormData({ username: e.target.value })}
          />
          {errors.username && (
            <p className="text-red-50```0 text-sm mt-1">{errors.username}</p>
          )}
        </div>
      </div>

      <button onClick={handleNext} className="">
        Continue 1/3 →
      </button>
    </div>
  );
};
