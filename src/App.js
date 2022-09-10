import {useState} from 'react';
import './App.css';

/* - Fixing "Eval can be harmful (no-eval)"*/
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
      <div className="container">
            {/*Display Section*/}
            <div id="display">{result}</div>
            {/*Buttons Section*/}
            <div className="buttons">
              <div className="button " id="all-clear" onClick={clear}>AC</div>
              <div className="button operator" onClick={handleClick}>/</div>
              <div className="button operator" onClick={handleClick}>*</div>
              <div  className="button number" onClick={handleClick}>7</div>
              <div className="button number" onClick={handleClick}>8</div>
              <div className="button number" onClick={handleClick}>9</div>
              <div className="button operator" id="backspace" onClick={backspace}>←</div>
              <div className="button number" onClick={handleClick}>4</div>
              <div className="button number" onClick={handleClick}>5</div>
              <div className="button number" onClick={handleClick}>6</div>
              <div className="button operator" onClick={handleClick}>-</div>
              <div className="button number" onClick={handleClick}>1</div>
              <div className="button number" onClick={handleClick}>2</div>
              <div className="button number" onClick={handleClick}>3</div>
              <div className="button operator" onClick={handleClick}>+</div>
              <div className="button number" onClick={handleClick}>0</div>
              <div className="button number" onClick={handleClick}>.</div>
              <div className="button" id="equal" onClick={calculate}>=</div>
            </div>
      </div>
    </>
  );
}

export default App;
