import { useState,useEffect } from 'react'
import 'bulma/css/bulma.css'

function App() {
	const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('cargo')      
  }, [count])
  

	return (
    <>
      <h1 className='is-size-1' >Counter</h1>
      <button className='button is-large is-white'  onClick={() => setCount(count + 1)}>+</button>
      <p className='is-size-2'>{count}</p>
    </>
  )
}

export default App
