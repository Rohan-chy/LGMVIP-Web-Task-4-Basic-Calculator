
import { useState } from 'react';
import './App.css';

function App() {
  const [input,setInput]=useState("");
  
  const getValue=(e)=>{
    setInput(input + e.target.value);
  }
  const Clear=()=>{
    setInput("");
  }

  const Delete=()=>{
    setInput(input.slice(0,-1));
  }
  
  const Calculate=()=>{
    const value=eval(input);
    setInput(value);
  }
  return (
    <div className='container'>
      <h1>Simple Calculator</h1>
      <input type="text" name="input" id="input" value={input}/>

      <div className='buttons'>
        <input type="button" value="C" className='clear'onClick={Clear}/>
        <input type="button" value="/" className='operator'onClick={getValue}/>
        <input type="button" value="*" className='operator'onClick={getValue}/>
        <input type="button" value="-" className='operator'onClick={getValue}/>
        <input type="button" value="7" className='number'onClick={getValue}/>
        <input type="button" value="8" className='number'onClick={getValue}/>
        <input type="button" value="9" className='number'onClick={getValue}/>
        <input type="button" value="+" className='operator'onClick={getValue}/>
        <input type="button" value="4" className='number'onClick={getValue}/>
        <input type="button" value="5" className='number'onClick={getValue}/>
        <input type="button" value="6" className='number'onClick={getValue}/>
        <input type="button" value="=" className='equal'onClick={Calculate}/>
        <input type="button" value="1" className='number'onClick={getValue}/>
        <input type="button" value="2" className='number'onClick={getValue}/>
        <input type="button" value="3" className='number'onClick={getValue}/>
        <input type="button" value="0" className='number'onClick={getValue}/>
        <input type="button" value="." className='number'onClick={getValue}/>
        <input type="button" value="Del" className='clear'onClick={Delete}/>
      </div>
    </div>
  );
}

export default App;
