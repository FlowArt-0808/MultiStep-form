import { useRef, useState } from "react";
import { PineconeLogo } from "../icons/PineconeLogo";
import { RightFacingVector } from "../icons/RightFacingVector";
import { LeftFacingVector } from "../icons/LeftFacingVector";

export const StepThree = ({ nextStep, prevStep, updateFormData, data }) => {
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState(
    data.profileImage ? URL.createObjectURL(data.profileImage) : null
  );
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      updateFormData({ profileImage: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleNext = () => {
    const newErrors = {};
    if (!data.dob) newErrors.dob = "Date of birth is required.";
    if (!data.profileImage)
      newErrors.profileImage = "Profile image is required.";
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
            Date of birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            className={` ${errors.dob ? "border-red-500" : "border-gray-300"}`}
            value={data.dob}
            onChange={(e) => updateFormData({ dob: e.target.value })}
          />
          {errors.dob && <p className="">{errors.dob}</p>}
        </div>

        <div>
          <label className="">
            Profile image <span className="">*</span>
          </label>

          <div
            className={` ${
              errors.profileImage ? "border-red-500" : "border-gray-300"
            }`}
            onClick={() => fileInputRef.current.click()}
          >
            {preview ? (
              <img src={preview} alt="Preview" className="" />
            ) : (
              <p className="">Browse or Drop Image</p>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          {errors.profileImage && <p className="">{errors.profileImage}</p>}
        </div>
      </div>

      <div className="">
        <button onClick={prevStep} className="">
          <LeftFacingVector />
          Back
        </button>
        <button onClick={handleNext} className="">
          Continue 3/3
          <RightFacingVector />
        </button>
      </div>
    </div>
  );
};
