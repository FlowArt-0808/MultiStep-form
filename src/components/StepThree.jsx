import { useState } from "react";

export const StepThree = ({ nextStep, prevStep, updateFormData, data }) => {
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      updateFormData({ profileImage: URL.createObjectURL(file) });
      setError("");
    } else {
      setError("Profile image is required");
    }
  };

  const handleNext = () => {
    if (!data.profileImage) {
      setError("Please upload an image");
      return;
    }
    nextStep();
  };

  return (
    <div className="flex flex-col bg-white p-10 rounded-2xl w-[380px] shadow-md">
      <h2 className="text-xl font-semibold">Join Us! 😎</h2>
      <p className="text-gray-500 text-sm mb-6">Upload your profile image</p>

      <input type="file" accept="image/*" onChange={handleFileChange} />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      {data.profileImage && (
        <img
          src={data.profileImage}
          alt="Preview"
          className="w-32 h-32 object-cover rounded-full mx-auto mt-4"
        />
      )}

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
          Submit
        </button>
      </div>
    </div>
  );
};
