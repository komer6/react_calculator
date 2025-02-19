import React, { useState } from "react";
import "./App.css";
import CAlcu from "./CAlcu";

const App = () => {
  const [first, setFirst] = useState(0);
  const [colo, scolo] = useState("white");

  const samp = () => {
    setFirst((prev) => prev + 1);
  };

  const getRandomRGB = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    scolo(`rgb(${r}, ${g}, ${b})`);
  };

  // New function to handle both actions
  const handleClick = () => {
    samp();
    getRandomRGB();
  };

  return (
    <div>
      <button onClick={handleClick} style={{ backgroundColor: colo }}>
        {first}
      </button>
      <CAlcu />
    </div>
  );
};

export default App;
