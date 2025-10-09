import { useState } from "react";

export const StepOne = () => {
  const [data, setData] = useState({});

  return (
    <div className="flex flex-col bg-white rounded-2xl">
      <div></div>
      <img src="Main 1.png" alt="Main icon" width="60" height="60" />
      <h2>Join Us!😎</h2>
      <p>Please provide all current information accurately</p>

      <div className="gap-12 flex flex-col">
        <div className="flex flex-col gap-8">
          <label>First name</label>
          <input type="text" placeholder="Enter first name" />
        </div>

        <div classname="flex flex-col gap-8">
          <label>Last name</label>
          <input type="text" placeholder="Enter second name" />
        </div>

        <div classname="flex flex-col gap-8">
          <label>Username</label>
          <input type="text" placeholder="Enter username" />
        </div>
      </div>

      <button className="w-10 h-10 border-2 justify-center flex items-center">
        Next
      </button>
    </div>
  );
};
