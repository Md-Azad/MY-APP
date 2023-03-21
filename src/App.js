import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // const [count, setCount] = useState(55);
  const nayoks = ["rubel", "bapparaj", "jhankar", "mahbub", "shalmanshah"];
  return (
    <div className="App">
      <Counter></Counter>
      <User></User>
      {nayoks.map((nayok) => (
        <Person name={nayok}></Person>
      ))}
    </div>
  );
}

// Fetch data from Api and show them

function User() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <h1>name: {users.length}</h1>
      {/* {users.map((user) => (
        <li>{user.name}</li>
      ))} */}
      {users.map((user) => (
        <ShowUser name={user.name} email={user.email}></ShowUser>
      ))}
    </div>
  );
}
// component for showing api's data

function ShowUser(props) {
  return (
    <div>
      <h1>name: {props.name}</h1>
      <p>Email: {props.email}</p>
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
