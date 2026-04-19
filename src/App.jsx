import { useState } from "react"
//x horizontal y vertical 

function Shape({ shapeMovement }){
  const topHeight = 0;
  let maxWidth = window.innerWidth;
  let maxHeight = window.innerHeight; //alto hacia bajo totalpx

  const [coordinates, setCoordinates] = useState({ x: maxWidth/2 - 64, y: maxHeight/2 - 64 });
  const [movement, setMovement] = useState(10);
    
  let shapeCircle = 9999;
  let shapeSquare = 0;
  const [shape, setShape] = useState({ geometry: shapeSquare, color: "red" });  
  
  function handleClickShape(){
    if(shape.geometry == shapeSquare){
      setShape({ geometry: shapeCircle, color: "blue" });
      setMovement(shapeMovement);
    }

    if(shape.geometry == shapeCircle){
      setShape({ geometry: shapeSquare, color: "red" });
      setMovement(shapeMovement/2);
    }
  }

  function handleOnKeyDown(eventCode){
    switch(eventCode){
      case "ArrowUp":
        if(coordinates.y > topHeight){
          setCoordinates(prevCoordinates => { 
            if(movement > prevCoordinates.y){
              return { ...prevCoordinates, y: (prevCoordinates.y)*0 }
            }
            return { ...prevCoordinates, y: prevCoordinates.y - movement }
          })
        }
        break;

      case "ArrowDown":
        setCoordinates(prevCoordinates => {
          const shapeHeight = 128;
          const maxY = window.innerHeight - 128;
          const newY = prevCoordinates.y + movement;
          let newMovement;

          if(newY > maxY){
            newMovement = maxY;
          } else {
            newMovement = newY;
          }
          
          return { ...prevCoordinates, y: newMovement };
        });
  break;

      case "ArrowRight":
        setCoordinates(prevCoordinates => ({...prevCoordinates, x: prevCoordinates.x - movement }))
        console.log("ESTOY DERECHA")
        break;

      case "ArrowLeft":
        setCoordinates(prevCoordinates => ({ ...prevCoordinates, x: prevCoordinates.x + movement  }))
        console.log("ESTOY LEFT")
        break;
    }
  }
  
  return (
    <div onClick={handleClickShape} tabIndex={1} onKeyDown={e => handleOnKeyDown(e.code) } style={{top: coordinates.y,  right: coordinates.x, borderRadius: shape.geometry, backgroundColor: shape.color, transition: "all 0.2s linear"}} className=" absolute w-32 h-32"></div> 
  )
}

// function Test(){
//   let maxWidth = window.innerWidth;
//   let maxHeight = window.innerHeight;
//   const [coordinates, setCoordinates] = useState({ x: window.innerWidth/2 - 64, y: window.innerHeight/2 - 64 });

//   return(
//     <div tabIndex={1} style={{top: coordinates.y,  right: coordinates.x, borderRadius: 9999, backgroundColor: "blue", transition: "all 0.2s linear"}} className=" absolute w-32 h-32"></div> 
//   )
// }

function App() {

  return (
      <>
        {
          Array.from({length: 4}).map( (_, i) => <Shape key={i} shapeMovement={60} /> )
        }
      </>

)
}
// Array.from({length: 4}).map( (_, i) => <Shape key={i} shapeMovement={60} /> )

export default App
