import { useState } from "react"
//x horizontal y verttical 

function App() {
  const [coordinates, setCoordinates] = useState({x: 150, y: 150 })
  let movement = 10;
  
  function handleOnKeyDown(eventCode){
    switch(eventCode){
      case "ArrowUp":
        setCoordinates(prevCoordinates => ({ ...prevCoordinates, y: prevCoordinates.y-movement }))
        console.log("ESTOY UP")
        break;
      case "ArrowDown":
        setCoordinates(prevCoordinates => ({ ...prevCoordinates, y: prevCoordinates.y+movement }))
        console.log("ESTOY DOWN")
        break;
      case "ArrowRight":
        setCoordinates(prevCoordinates => ({...prevCoordinates, x: prevCoordinates.x-movement }))
        console.log("ESTOY DERECHA")
        break;
      case "ArrowLeft":
        setCoordinates(prevCoordinates => ({ ...prevCoordinates, x: prevCoordinates.x+movement  }))
        console.log("ESTOY LEFT")
        break;
    }
  }
  return (
    <div contentEditable onKeyDown={e => handleOnKeyDown(e.code) } style={{top: coordinates.y, right: coordinates.x, transition: "all 0.2s linear"}} className="bg-red-500 absolute w-32 h-32"></div> 
  )
}
{/* <input onKeyDown={ e => {console.log("KeyDown", e);} } type="text" /> */}

export default App
