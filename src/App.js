import Counter from "./Counter";
import Hello from "./Hello"
function App() {
  const vardi= ["Kristers","Oskars","Zigis","bots"]
  const vardiJSX = vardi.map((theName,index)=>{
    return <Hello defaultName={theName} key={index}/>
  });
  return(
    <>
    <Counter/>
    {vardiJSX}
    </>
  )
}

export default App;
