function App() {
  

  return (
    <div contentEditable={"true"} onKeyDown={e => {console.log}} className="bg-red-500 absolute w-32 h-32"></div> 
  )
}
{/* <input onKeyDown={ e => {console.log("KeyDown", e);} } type="text" /> */}

export default App
