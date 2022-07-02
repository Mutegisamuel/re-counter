import React from 'react'


const Counter = ({count}) => {

  console.log(typeof count)

  if (typeof count !== 'number') {
    return(
      <h1 className='reed'>{count}</h1>
    )
  }else if (count % 1 != 0) {
    return(
      <h1 className='purple'>{count}</h1>
    )
  }
else {
  return(
    <h1 className='green'>{count}</h1>
  )
}

}

export default Counter;
