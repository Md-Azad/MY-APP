import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(55);
  const nayoks = ["rubel", "bapparaj", "jhankar", "mahbub", "shalmanshah"];
  return (
    <div className="App">
      <Counter></Counter>
      {nayoks.map((nayok) => (
        <Person name={nayok}></Person>
      ))}
      {/* <Person name=" Azad Hossain" job="Student"></Person>
      <Person name="sazzad Hossain" job="Driver"></Person> */}
    </div>
  );
}

// Making component

function Person(props) {
  return (
    <div>
      <h1>name:-{props.name} </h1>
      <h2>Job:{props.job} </h2>
    </div>
  );
}

// Counter
function Counter() {
  const [count, setCount] = useState(0);
  const increaseValue = () => setCount(count + 1);
  const decreaseValue = () => {
    if (count === 0) {
      alert("the value can't be decrease more!!!");
    } else {
      setCount(count - 1);
    }
  };
  const reset = () => setCount(0);
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={increaseValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
export default App;
