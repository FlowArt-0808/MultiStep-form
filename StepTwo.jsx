import React, { useState } from "react";
import { LeftFacingVector } from "./LeftFacingVector";
import { PineconeLogo } from "./PineconeLogo";

export const StepTwo = ({ nextStep, prevStep, updateFormData, data }) => {
  const [errors, setErrors] = useState({});
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{8,12}$/;

  const handleNext = () => {
    const newErrors = {};

    if (!emailRegex.test(data.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!phoneRegex.test(data.phone)) {
      newErrors.phone = "Phone number must be 8 to 12 digits.";
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
            Email <em>*</em>
          </span>
          <input
            type="email"
            value={data.email}
            onChange={(event) => updateFormData({ email: event.target.value })}
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </label>

        <label className="field field-full">
          <span>
            Phone number <em>*</em>
          </span>
          <input
            type="tel"
            value={data.phone}
            onChange={(event) => updateFormData({ phone: event.target.value })}
          />
          {errors.phone && <small className="error">{errors.phone}</small>}
        </label>

        <label className="field">
          <span>
            Password <em>*</em>
          </span>
          <input
            type="password"
            value={data.password}
            onChange={(event) =>
              updateFormData({ password: event.target.value })
            }
          />
          {errors.password && <small className="error">{errors.password}</small>}
        </label>

        <label className="field">
          <span>
            Confirm password <em>*</em>
          </span>
          <input
            type="password"
            value={data.confirmPassword}
            onChange={(event) =>
              updateFormData({ confirmPassword: event.target.value })
            }
          />
          {errors.confirmPassword && (
            <small className="error">{errors.confirmPassword}</small>
          )}
        </label>
      </div>

      <div className="actions">
        <button type="button" className="secondary-button" onClick={prevStep}>
          <LeftFacingVector />
          Back
        </button>
        <button type="button" className="primary-button" onClick={handleNext}>
          Continue 2/3
        </button>
      </div>
    </section>
  );
};
