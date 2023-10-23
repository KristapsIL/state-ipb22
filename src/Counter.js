import {useState } from "react";

function Counter(props){
  const [result, setResult] = useState(0);
  const [ratioChange, setRatioChange] = useState(props.defRatio);

  function addOne(){
    setResult(result+parseInt(ratioChange));
    console.log(result);
  }
  function minusOne(){
    setResult(result-ratioChange);
  }
    function handleRatioChange(quak){
    setRatioChange(quak.target.value);
  }
  return (
    <div className="App">
      <form>
        <input type="number" value={ratioChange} onChange={handleRatioChange}></input>
      </form>
        <button onClick={addOne}>Ratio +{ratioChange}</button>
        <button onClick={minusOne}>Ratio -{ratioChange}</button>
      <h1>{result}</h1>
    </div>
  );
}
export default Counter;