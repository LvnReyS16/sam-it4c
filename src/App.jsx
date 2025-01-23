import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  let name = 'John Doe'

  function handleButton(type) {
    setCount(type === 'increment' ? count + 1 : count - 1)
  }
  

  return (
    <>
    <div>{name}</div>
    <div>{count}</div>
    <button onClick={function () {
      handleButton("increment")
    }}>
      Increment
    </button>
    <button onClick={function (){
      handleButton("decrement")
    }}>
      Decrement
    </button>
    </>
  )
}

export default App
