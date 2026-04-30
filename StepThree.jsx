import React, { useEffect, useRef, useState } from "react";
import { LeftFacingVector } from "./LeftFacingVector";
import { PineconeLogo } from "./PineconeLogo";

export const StepThree = ({ nextStep, prevStep, updateFormData, data }) => {
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!data.profileImage) {
      setPreview(null);
      return undefined;
    }

    const objectUrl = URL.createObjectURL(data.profileImage);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [data.profileImage]);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    updateFormData({ profileImage: file });
    setPreview(URL.createObjectURL(file));
  };

  const handleNext = () => {
    const newErrors = {};
    const birthDate = data.dob ? new Date(data.dob) : null;
    const today = new Date();

    if (!data.dob) {
      newErrors.dob = "Date of birth is required.";
    } else if (birthDate > today) {
      newErrors.dob = "Date of birth cannot be in the future.";
    }

    if (!data.profileImage) {
      newErrors.profileImage = "Profile image is required.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      nextStep();
    }
  };

  return (
    <section className="card">
      <div className="brand-row">
        <PineconeLogo />
        <div>
          <h1>Join Us! 😎</h1>
          <p className="subcopy">
            Please provide all current information accurately.
          </p>
        </div>
      </div>

      <div className="form-grid">
        <label className="field field-full">
          <span>
            Date of birth <em>*</em>
          </span>
          <input
            type="date"
            value={data.dob}
            onChange={(event) => updateFormData({ dob: event.target.value })}
          />
          {errors.dob && <small className="error">{errors.dob}</small>}
        </label>

        <div className="field field-full">
          <span>
            Profile image <em>*</em>
          </span>
          <button
            type="button"
            className="upload-box"
            onClick={() => fileInputRef.current?.click()}
          >
            {preview ? (
              <img src={preview} alt="Profile preview" className="upload-preview" />
            ) : (
              <span>Choose an image</span>
            )}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden-input"
          />
          {errors.profileImage && (
            <small className="error">{errors.profileImage}</small>
          )}
        </div>
      </div>

      <div className="actions">
        <button type="button" className="secondary-button" onClick={prevStep}>
          <LeftFacingVector />
          Back
        </button>
        <button type="button" className="primary-button" onClick={handleNext}>
          Continue 3/3
        </button>
      </div>
    </section>
  );
};
