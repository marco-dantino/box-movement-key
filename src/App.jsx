import { useState } from "react"
//x horizontal y verttical 

function App() {
  const [coordinates, setCoordinates] = useState({ x: window.innerWidth/2 - 64, y: window.innerHeight/2 - 64 });
  const [movement, setMovement] = useState(10);
  
  let shapeCircle = 9999;
  let shapeSquare = 0;
  const [shape, setShape] = useState({ geometry: shapeSquare, color: "red" });
  
  function handleClickShape(){
    if(shape.geometry == shapeSquare){
      setShape({ geometry: shapeCircle, color: "blue" });
      setMovement(1);
    }

    if(shape.geometry == shapeCircle){
      setShape({ geometry: shapeSquare, color: "red" });
      setMovement(50);
    }
  }

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
    <div onClick={handleClickShape} tabIndex={1} onKeyDown={e => handleOnKeyDown(e.code) } style={{top: coordinates.y,  right: coordinates.x, borderRadius: shape.geometry, backgroundColor: shape.color, transition: "all 0.2s linear"}} className=" absolute w-32 h-32"></div> 
  )
}
{/* <input onKeyDown={ e => {console.log("KeyDown", e);} } type="text" /> */}

export default App
