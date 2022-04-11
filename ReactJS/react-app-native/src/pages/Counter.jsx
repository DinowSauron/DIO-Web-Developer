import React from "react"
import { connect } from "react-redux"


function Counter({count, dispatch}) {
  
  // Qual diferença entre utilizar isso e o useState?

  const increment = () => {
    dispatch({ type: "INCREMENT"})
    console.log("incremented")
  }

  const decrement = () => {
    dispatch({ type: "DECREMENT"})
    console.log("decremented")
  }

  return (
    <div style={{width: 'fit-content', margin: 'auto'}}>
      <h1 style={{width: 'fit-content', margin: 0}}>Counter</h1>
      <button onClick={decrement}>-</button>
      <h2 style={{display: 'inline'}} id="counter">{count}</h2>
      <button onClick={increment}>+</button>
    </div>
  );
}

function mapstateToProps(state) {
  return {
    count: state.count
  }
}

export default connect(mapstateToProps)(Counter)
