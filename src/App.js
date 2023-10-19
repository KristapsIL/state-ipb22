import {useState } from "react";
function App() {
  const [result, setResult] = useState(0);
  const [ratioChange, setRatioChange] = useState(1);

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
  <button onClick={addOne}>button +{ratioChange}</button>
  <button onClick={minusOne}>button -{ratioChange}</button>
      <h1>{result}</h1>
    </div>
  );
}

export default App;
