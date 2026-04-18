import { useState } from "react"
//x horizontal y verttical 

function App() {
  const [coordinates, setCoordinates] = useState({x: 150, y: 150 })

  function handleOnKeyDown(eventCode){
    switch(eventCode){
      case "ArrowUp":
        setCoordinates(prevCoordinates => ({ ...prevCoordinates, y: prevCoordinates.y-1 }))
        console.log("ESTOY UP")
        break;
      case "ArrowDown":
        setCoordinates(prevCoordinates => ({ ...prevCoordinates, y: prevCoordinates.y+1 }))
        console.log("ESTOY DOWN")
        break;
      case "ArrowRight":
        setCoordinates(prevCoordinates => ({...prevCoordinates, x: prevCoordinates.x-1 }))
        console.log("ESTOY DERECHA")
        break;
      case "ArrowLeft":
        setCoordinates(prevCoordinates => ({ ...prevCoordinates, x: prevCoordinates.x+1  }))
        console.log("ESTOY LEFT")
        break;
    }
  }
  return (
    <div contentEditable onKeyDown={e => handleOnKeyDown(e.code) } style={{top: coordinates.y, right: coordinates.x}} className="bg-red-500 absolute w-32 h-32"></div> 
  )
}
{/* <input onKeyDown={ e => {console.log("KeyDown", e);} } type="text" /> */}

export default App
