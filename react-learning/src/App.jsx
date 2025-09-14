import React, {useState} from "react";

export default function App() {
const [Count, setCount] = useState(0);
const increase = () => {
  setCount(Count + 1)
};
const decrease = () => {
  if (Count > 0){
    setCount(Count - 1)
  }
  
};
return (
    <div style={styles.container}>
      <h1 style={styles.title}>Counter App</h1>
      <p style={styles.number}>{count}</p>
      <div style={styles.buttonContainer}>
        <button onClick={increase} style={styles.buttonAdd}>
          ➕ Increase
        </button>
        <button onClick={decrease} style={styles.buttonSubtract}>
          ➖ Decrease
        </button>
      </div>
    </div>
  );

  
}