import React, { useState } from "react";
import { PineconeLogo } from "./PineconeLogo";

export const StepOne = ({ nextStep, updateFormData, data }) => {
  const [errors, setErrors] = useState({});
  const nameRegex = /^[A-Za-z]+$/;

  const handleNext = () => {
    const newErrors = {};

    if (!data.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    } else if (!nameRegex.test(data.firstName.trim())) {
      newErrors.firstName = "Only letters are allowed in the first name.";
    }

    if (!data.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    } else if (!nameRegex.test(data.lastName.trim())) {
      newErrors.lastName = "Only letters are allowed in the last name.";
    }

    if (!data.username.trim()) {
      newErrors.username = "Username is required.";
    } else if (["amgaa", "john", "admin"].includes(data.username.toLowerCase())) {
      newErrors.username = "That username is already taken.";
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
        <label className="field">
          <span>
            First name <em>*</em>
          </span>
          <input
            type="text"
            value={data.firstName}
            onChange={(event) =>
              updateFormData({ firstName: event.target.value })
            }
          />
          {errors.firstName && <small className="error">{errors.firstName}</small>}
        </label>

        <label className="field">
          <span>
            Last name <em>*</em>
          </span>
          <input
            type="text"
            value={data.lastName}
            onChange={(event) =>
              updateFormData({ lastName: event.target.value })
            }
          />
          {errors.lastName && <small className="error">{errors.lastName}</small>}
        </label>

        <label className="field field-full">
          <span>
            Username <em>*</em>
          </span>
          <input
            type="text"
            value={data.username}
            onChange={(event) =>
              updateFormData({ username: event.target.value })
            }
          />
          {errors.username && <small className="error">{errors.username}</small>}
        </label>
      </div>

      <div className="actions">
        <div className="progress-copy">Step 1 of 3</div>
        <button type="button" className="primary-button" onClick={handleNext}>
          Continue 1/3
        </button>
      </div>
    </section>
  );
};
