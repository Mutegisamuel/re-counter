import './App.css';
import React, { useState, useEffect } from 'react';
import Counter from './Components/counter/counter';
import Multiply from './Components/multiply-button/multiply';
import Square from './Components/square-button/square';
import axios from 'axios';

function App() {

  const [counter, setCounter] = useState(2);
  const [iseven, setIseven] = useState(false);

  useEffect(() => {
    axios.get('https://api.isevenapi.xyz/api/iseven/' + counter)
      .then(res => {
        console.log(res.data.iseven);
        setIseven(res.data.iseven);
      })
      .catch(err => {
        console.log(err);
      });
  }, [counter]);



  if (counter % 2 == 0 && iseven) {
    return (
      <div className="App">
        <div className="main-div">
        <div className="counter-div">
          <Counter count={counter}/>
          <h4 className='isEven'>Is An Even Number</h4>          
        </div>
        <div className="btn-section">
          <Multiply count={counter} multiplycount={(counter) => setCounter(counter)}/>
          <Square count={counter} squarecount={(counter) => setCounter(counter)}/>
        </div>
      </div>
      </div>
    );
   }
   else{
    return (
      <div className="App">
        <div className="main-div">
        <div className="counter-div">
          <Counter count={counter}/>
          
        </div>
        <div className="btn-section">
          <Multiply count={counter} multiplycount={(counter) => setCounter(counter)}/>
          <Square count={counter} squarecount={(counter) => setCounter(counter)}/>
        </div>
      </div>
      </div>
    );
  }

  
}


export default App;
