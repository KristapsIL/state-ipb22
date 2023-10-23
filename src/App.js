import Counter from "./Counter";
import Hello from "./Hello"
function App() {
  const ratios=["7","43","101"];
  const ratiosJSX = ratios.map((theRatio,index)=>{
    return <Counter defRatio={theRatio} key={index}/>
  });
  const vardi= ["Kristers","Oskars","Zigis","Mini P.E.K.K.A"];
  const vardiJSX = vardi.map((theName,index)=>{
    return <Hello defaultName={theName} key={index}/>
  });
  return(
    <>
    {ratiosJSX}
    {vardiJSX}
    </>
  )
}

export default App;
