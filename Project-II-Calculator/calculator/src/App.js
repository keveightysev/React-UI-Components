import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="calculator">
      <Display number="0" />
    </div>
  );
};

export default App;
