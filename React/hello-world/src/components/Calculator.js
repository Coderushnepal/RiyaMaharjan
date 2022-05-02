import React, { useEffect, useState, useMemo } from "react";
import "../assests/css/style.css";

export const Calculator = () => {
  const [dollar, setDollar] = useState(10);
  const [theme, setTheme] = useState("dark");
  // const [pound, setPound] = useState(10);

  // useEffect(() =>{
  //     setPound(0.76 * dollar);
  // },[dollar]);

  //   useEffect(() =>{
  //       setDollar(pound / 0.76);
  //   },[pound]);

  const double = useMemo(() => {
    return doubleTheDollar(dollar);
  }, [dollar]);

  return (
    <div className={theme}>
      <h1> Calculator </h1>
      Enter $ :
      <input
        type="number"
        value={dollar}
        onChange={(e) => setDollar(e.target.value)}
      />
      <div>
        Enter Pound :
        <input
          type="number"
          value={dollar * 1.23}
          onChange={(e) => setDollar(e.target.value / 1.23)}
        />
      </div>
      <div> Rupess = {dollar * 122}</div>
      <div> dollar = {dollar * 132}</div>
      <div> double = {double}</div>
      <button
        onClick={() =>
          setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
        }
      >
        Change Theme
      </button>
    </div>
  );
};

function doubleTheDollar(dollar) {
  for (let i = 0; i < 99999; i++) {
    for (let j = 0; j < 9999; j++) {}
  }
  return 2 * dollar;
}

export default Calculator;
