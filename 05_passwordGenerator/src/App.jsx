import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [chars, setChars] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)
  
  // function to generate password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) str += "1325467890";
    if (chars) str += "!@#$%*&_+-/";

    for(let i=1; i<length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numbers, chars, setPassword]);

  // function to copy password to clipboard
  const copyPassword = useCallback(() =>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  // Calling passwordGenerator method using useEffect hook
  useEffect(() => {
    passwordGenerator()
  }, [length, numbers, chars, setPassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto my-16 px-3 py-5 rounded-lg text-indigo-300 bg-gray-700">
        <h1 className="text-white text-2xl mb-3 text-center">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} placeholder="password" readOnly ref={passwordRef}
            className="outline-none text-lg font-medium text-purple-700 w-full py-1 px-3"
          />
          <button onClick={copyPassword} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-6">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={30} value={length} className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label className="text-md">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numbers} id="numberInput"
              onChange={() => {
                setNumbers((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={chars} id="charsInput"
              onChange={() => {
                setChars((prev) => !prev);
              }}
            />
            <label htmlFor="charsInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
