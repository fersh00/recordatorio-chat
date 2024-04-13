import { useState } from "react"


const Counter = () => {
    const [counter, setCounter] = useState(0)
  return (
    <div>
        <h1 className='is-size-1 has-text-centered' >Counter</h1>
      <button className='button is-large is-fullwidth is-info is-dark'  onClick={() => setCounter(counter + 1)}>+</button>
      <p className='is-size-2 has-text-centered'>{counter}</p> 
    </div>
  )
}

export default Counter