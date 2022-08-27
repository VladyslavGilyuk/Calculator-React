import { useState} from 'react';
import './App.css';

/* eslint no-eval: 0 */

const App = () => {
  const [result, setResult] = useState("")
const  handleClick = (e) => {
    setResult(result.concat(e.target.innerText))
  }
  const clear = () => {
    setResult("")
  }
  const backspace = () => {
    setResult(result.slice(0, -1))
  }

  const calculate = () => {
    try {
      if (result === "") {
        setResult("Empty!");
        setTimeout( () => setResult(""), 
          1000
        );
        
      } else {
        setResult(eval(result).toString()) ;
      }} catch {
      setResult("Error")
     }
   }
  

  return (
    <>
      <div class="container">
            <div id="display">{result}</div>
            <div class="buttons">
                <div class="button " id="all-clear" onClick={clear}>AC</div>
                <div class="button operator" onClick={handleClick}>/</div>
                <div class="button operator" onClick={handleClick}>*</div>
                <div  class="button number" onClick={handleClick}>7</div>
                <div class="button number" onClick={handleClick}>8</div>
                <div class="button number" onClick={handleClick}>9</div>
                <div class="button operator" id="backspace" onClick={backspace}>←</div>
                <div class="button number" onClick={handleClick}>4</div>
                <div class="button number" onClick={handleClick}>5</div>
                <div class="button number" onClick={handleClick}>6</div>
                <div class="button operator" onClick={handleClick}>-</div>
                <div class="button number" onClick={handleClick}>1</div>
                <div class="button number" onClick={handleClick}>2</div>
                <div class="button number" onClick={handleClick}>3</div>
                <div class="button operator" onClick={handleClick}>+</div>
                <div class="button number" onClick={handleClick}>0</div>
                <div class="button number" onClick={handleClick}>.</div>
                <div id="equal" class="button" onClick={calculate}>=</div>
            </div>
        </div>
    </>
  );
}

export default App;
