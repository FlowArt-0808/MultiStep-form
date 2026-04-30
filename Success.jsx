import React, { useEffect, useState } from "react";

export default function Success({ data }) {
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    if (!data.profileImage) {
      setAvatarUrl(null);
      return undefined;
    }

    const objectUrl = URL.createObjectURL(data.profileImage);
    setAvatarUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [data.profileImage]);

  return (
    <section className="card success-card">
      <h1>Success!</h1>
      <p className="subcopy">
        Your information has been submitted successfully.
      </p>

      <div className="summary">
        {avatarUrl && (
          <div className="summary-avatar-row">
            <span>Profile image</span>
            <img
              src={avatarUrl}
              alt={`${data.firstName} ${data.lastName}`}
              className="success-avatar"
            />
          </div>
        )}
        <div>
          <span>Name</span>
          <strong>
            {data.firstName} {data.lastName}
          </strong>
        </div>
        <div>
          <span>Username</span>
          <strong>{data.username}</strong>
        </div>
        <div>
          <span>Email</span>
          <strong>{data.email}</strong>
        </div>
        <div>
          <span>Phone</span>
          <strong>{data.phone}</strong>
        </div>
        <div>
          <span>Date of birth</span>
          <strong>{data.dob}</strong>
        </div>
      </div>
    </section>
  );
}
