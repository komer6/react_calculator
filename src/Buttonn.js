import React, { useState } from "react";

const Buttonn = () => {
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


  const handleClick = () => {
    samp();
    getRandomRGB();
  };

  return (
    <div>
      <button onClick={handleClick} style={{ backgroundColor: colo }}>
        {first}
      </button>
    </div>
  );
};

export default Buttonn;
