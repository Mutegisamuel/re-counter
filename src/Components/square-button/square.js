import React from "react"


const Square = ({count, squarecount}) => {

    const squarenum = Math.sqrt(count)

   
    if (Number.isInteger(count) !== true){
        
        return(
            <button onClick={() => squarecount(squarenum * 0 + 2)}>confirm</button>
        )
    }
    else{

    return(
      <button className="btn-square" onClick={() => squarecount(squarenum)}>Square root</button>
    )
    }

}
  
  export default Square;