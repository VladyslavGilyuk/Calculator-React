import {useState} from 'react';
import './App.css';

/* eslint no-eval: 0 */

const App = () => {
  /*sets the state of displayed result*/
  const [result, setResult] = useState("")

  /*concatenates value of pressed btn with display result*/
  const handleClick = (e) => {
      setResult(result.concat(e.target.innerText))
    }

  /*clears the result*/
  const clear = () => {
      setResult("")
    }

    /*deletes last entered value*/
  const backspace = () => {
      setResult(result.slice(0, -1))
    }

  /*does math calculation*/
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
          setTimeout( () => setResult(""), 
            1000
          );
         }
  }
  

  return (
    <>
      <div class="container">
            {/*Display Section*/}
            <div id="display">{result}</div>
            {/*Buttons Section*/}
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
              <div class="button" id="equal" onClick={calculate}>=</div>
            </div>
      </div>
    </>
  );
}

export default App;
