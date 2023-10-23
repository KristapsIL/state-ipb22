import Counter from "./Counter";
import Hello from "./Hello";
import Check from "./Check";
function App() {
  const chek = [true,true,false];
  const checkJSX = chek.map((theValue,index)=>{
    return <Check defCheck={theValue} key={index}/>
  })
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
    {checkJSX}
    {ratiosJSX}
    {vardiJSX}
    </>
  )
}

export default App;
