import { useState } from 'react';
import './App.css'

function App() {

    let [counter , setCounter] = useState(20);
  // let counter = 20;

    let addValue = ()=> {
      // counter = counter + 1;
      if(counter<20){

        setCounter(counter + 1);
      }
      console.log("increase clicked..current value : ", counter)
    }

    let decreaseValue = ()=> {
      if(counter > 0){
        
        setCounter(counter - 1);
      }
      console.log(" decrease clicked..current value : ", counter)
    }

  return (
    <>
      <h1>Counter project</h1>
      <h3>Counter value : {counter}</h3>

      <button onClick={addValue}>Increase value: {counter}</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrease value: {counter}</button>

      <footer>Footer : {counter}</footer>
    </>
  )
}

export default App
