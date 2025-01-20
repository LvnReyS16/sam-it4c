import { useState, useEffect } from "react";
import "./App.css"

function App() {
  const [value, setValue] = useState("SAM MILBY")
  const [name, setName] = useState("")

  function handleClick() {
    setValue("ANNE CURTIS")
  }

  function handleInput(event) {
    setName(event.target.value)
  }

  useEffect(() => {

    console.log("hit useEffect")



  }, [value])


  return (
    <div className="parent-container">
      <h1>HELLO SAM-IT4A</h1>
      <button onClick={handleClick}> Click Me!</button>
      {value}
      <input onChange={function (event) {
          handleInput(event)
      }}>
      </input>

      {name}
  </div>
  )
}

export default App;