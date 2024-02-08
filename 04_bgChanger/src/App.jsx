import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("#1a1a1a");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed top-7 flex flex-wrap justify-center inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <Button onclick={() => setColor("red")} color="red" />
          <Button onclick={() => setColor("green")} color="green" />
          <Button onclick={() => setColor("yellow")} color="yellow" />
          <Button onclick={() => setColor("lightblue")} color="lightblue" />
          <Button onclick={() => setColor("orange")} color="orange" />
          <Button onclick={() => setColor("lavender")} color="lavender" />
          <Button onclick={() => setColor("lime")} color="lime" />
          <Button onclick={() => setColor("brown")} color="brown" />
          <Button onclick={() => setColor("darkblue")} color="darkblue" />
        </div>
      </div>
    </>
  );
}

export default App;
