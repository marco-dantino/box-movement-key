import { useState } from "react"

function App() {
  const [coordinates, setCoordinates] = useState({x: 0, y: 0 })

  function handleOnKeyDown(eventCode){
    switch(eventCode){
      case 'ArrowUp':
        break;
      case 'ArrowDown':
        break;
      case 'ArrowRight':
        break;
      case 'ArrowLeft':
        break;
    }
  }
  return (
    <div contentEditable onKeyDown={e => {console.log(e.code)}} className="bg-red-500 absolute w-32 h-32"></div> 
  )
}
{/* <input onKeyDown={ e => {console.log("KeyDown", e);} } type="text" /> */}

export default App
