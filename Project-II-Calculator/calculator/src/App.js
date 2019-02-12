import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div className="calculator">
      <Display number="0" />
      <div className="buttons">
      <div className="number-buttons">
        <ActionButton buttonStyle="large-button" text="clear" />
        <NumberButton buttonStyle="small-number-button" text="7" />
        <NumberButton buttonStyle="small-number-button" text="8" />
        <NumberButton buttonStyle="small-number-button" text="9" />
        <NumberButton buttonStyle="small-number-button" text="4" />
        <NumberButton buttonStyle="small-number-button" text="5" />
        <NumberButton buttonStyle="small-number-button" text="6" />
        <NumberButton buttonStyle="small-number-button" text="1" />
        <NumberButton buttonStyle="small-number-button" text="2" />
        <NumberButton buttonStyle="small-number-button" text="3" />
        <NumberButton buttonStyle="large-button" text="0" />
      </div>
      <div className="operators">
        <ActionButton buttonStyle="small-button" text="&#247;" />
        <ActionButton buttonStyle="small-button" text="&#215;" />
        <ActionButton buttonStyle="small-button" text="&#8722;" />
        <ActionButton buttonStyle="small-button" text="&#43;" />
        <ActionButton buttonStyle="small-button" text="&#61;" />
      </div>
      </div>
    </div>
  );
};

export default App;
