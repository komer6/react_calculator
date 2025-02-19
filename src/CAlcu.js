import React, { useState } from "react";

const CAlcu = () => {
  const [fir, setFir] = useState(0);
  const [sec, setSec] = useState(0);
  const [res, setRes] = useState(0); 
  const plus = () => {
    setRes(fir + sec);
  };
  const minus = () => {
    setRes(fir - sec);
  };
  const mult = () => {
    setRes(fir * sec);
  };
  const divi = () => {
    setRes(fir /sec);
  };
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <label>Num1:</label>
      <input 
        type="number"
        value={fir} 
        onChange={(e) => setFir(Number(e.target.value))} 
      />
      <label>Num2:</label>
      <input 
        type="number"
        value={sec} 
        onChange={(e) => setSec(Number(e.target.value))} 
      />
      <p>Result: <strong>{res}</strong></p>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={mult}>X</button>
      <button onClick={divi}>/</button>
    </div>
  );
};

export default CAlcu;
