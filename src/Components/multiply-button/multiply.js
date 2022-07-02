import React from 'react'

const Multiply = ({count, multiplycount}) => {

    if (Number.isInteger(count) !== true ){
        return(
            <input className='inpuut' type='number' placeholder='Input a number'></input>
        )
    }else{
        return(
            <button className="btn-mult" onClick={() => multiplycount(count * count)}>Multiply</button>
          )
    }
    
  }
  
  export default Multiply;
