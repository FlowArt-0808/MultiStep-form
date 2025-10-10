import { useState } from "react";

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
    <div className="flex flex-col bg-white p-10 rounded-2xl w-[420px] shadow-sm border border-gray-200">
      <img
        src="Main 1.png"
        alt="Main icon"
        width="50"
        height="50"
        className="mb-4"
      />
      <h2 className="text-2xl font-semibold text-gray-900">Join Us! 😎</h2>
      <p className="text-gray-400 text-sm mb-8">
        Please provide all current information accurately.
      </p>

      <div className="flex flex-col gap-5">
        <div>
          <label className="font-medium text-gray-700">
            First name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className={`mt-1 w-full p-2.5 border rounded-lg ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            }`}
            value={data.firstName}
            onChange={(e) => updateFormData({ firstName: e.target.value })}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label className="font-medium text-gray-700">
            Last name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className={`mt-1 w-full p-2.5 border rounded-lg ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            }`}
            value={data.lastName}
            onChange={(e) => updateFormData({ lastName: e.target.value })}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
          )}
        </div>

        <div>
          <label className="font-medium text-gray-700">
            Username <span className="text-red-500">*</span>
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
            <p className="text-red-500 text-sm mt-1">{errors.username}</p>
          )}
        </div>
      </div>

      <button
        onClick={handleNext}
        className="mt-8 flex items-center justify-center gap-2 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition w-full font-medium"
      >
        Continue 1/3 →
      </button>
    </div>
  );
};
