import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { StepOne } from "./components/StepOne";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="w-screen h-screen flex items-center justify-center">
        <StepOne />
      </div>
    </>
  );
}

export default App;
