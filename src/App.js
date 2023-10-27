import Counter from "./Counter";
import Hello from "./Hello";
import Check from "./Check";
import LabelCheck from "./LabelCheck";
function App() {
  const labels = [{label:"Agree to the Policy", check:true},{label:"Receive Offers", check:false}]
  const labelJSX = labels.map((labelInput, index)=>{
    return <LabelCheck key={index} label={labelInput.label} checked={labelInput.check}/>
  });
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
    {labelJSX}
    </>
  )
}

export default App;
