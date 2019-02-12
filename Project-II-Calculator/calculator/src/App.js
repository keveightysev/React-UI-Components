import React from 'react';
import './App.css';
import Display from './components/DisplayComponents/CalculatorDisplay';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      current: [],
      stored: [],
      total: 0
    }
  }

  clickHandler = (num) => {
    this.setState((state) => ({
      clicked: true,
      current: state.current += num
    }));

    console.log(this.state.stored);
  }

  operatorHandler = (op) => {
    this.setState((state) => ({
      stored: [...this.state.stored, Number(state.current), op],
      current: []
    }))
  }

  // equalsHandler = () => {
  //   const value = this.state.stored;
  //   let total = 0;
  //   this.setState(() => ({
  //     current: value
  //   }))
  // }

  render() {
    return (
      <div className="calculator">
      <Display display={this.state.current} />
      <div className="buttons">
      <div className="number-buttons">
        <ActionButton buttonStyle="large-button" text="clear" />
        <NumberButton buttonStyle="small-number-button" text="7" action={() => this.clickHandler(7)} />
        <NumberButton buttonStyle="small-number-button" text="8" action={() => this.clickHandler(8)} />
        <NumberButton buttonStyle="small-number-button" text="9" action={() => this.clickHandler(9)} />
        <NumberButton buttonStyle="small-number-button" text="4" action={() => this.clickHandler(4)} />
        <NumberButton buttonStyle="small-number-button" text="5" action={() => this.clickHandler(5)} />
        <NumberButton buttonStyle="small-number-button" text="6" action={() => this.clickHandler(6)} />
        <NumberButton buttonStyle="small-number-button" text="1" action={() => this.clickHandler(1)} />
        <NumberButton buttonStyle="small-number-button" text="2" action={() => this.clickHandler(2)} />
        <NumberButton buttonStyle="small-number-button" text="3" action={() => this.clickHandler(3)} />
        <NumberButton buttonStyle="large-button" text="0" action={() => this.clickHandler(0)} />
      </div>
      <div className="operators">
        <ActionButton buttonStyle="small-button" text="&#247;" action={() => this.operatorHandler('/')} />
        <ActionButton buttonStyle="small-button" text="&#215;" action={() => this.operatorHandler('*')} />
        <ActionButton buttonStyle="small-button" text="&#8722;" action={() => this.operatorHandler('-')} />
        <ActionButton buttonStyle="small-button" text="&#43;" action={() => this.operatorHandler('+')} />
        <ActionButton buttonStyle="small-button" text="&#61;" /* action={() => this.equalsHandler()}*/ />
      </div>
      </div>
    </div>
    );
  }
}

export default App;
