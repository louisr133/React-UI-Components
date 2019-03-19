import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ActionButton from "./components/ButtonComponents/ActionButton";
import NumberButton from "./components/ButtonComponents/NumberButton";

var disNum = 0;

const App = () => {
 
  return (

    <div>
      <CalculatorDisplay current={disNum} />
      <div class="holder">
        <NumberButton /> 
        <ActionButton />
      </div>
     
    </div>


  );
};

export default App;
