import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  let prop = {
    name: "GOT",
    author: "G.R Martin"
  }

  return (
    <>
      <h1 className="bg-green-400 text-black text-2xl p-4 rounded-2xl mb-20">
        Tailwind
      </h1>
      {/* <Card name="aniket" prop1={{id: 1, age: 21}} prop2={[1, 2, 4]} prop3={prop} /> */}
      <Card name="aniket" btntext="visit me"/>
      <Card name="virat"/>
    </>
  );
}

export default App;
