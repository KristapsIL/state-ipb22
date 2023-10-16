import {useState } from "react";
function App() {
  const [result, setResult] = useState(0)
  function addOne(){
    setResult(result+1);
    console.log(result);
  }
  function minusOne(){
    setResult(result-1);
  }
  return (
    <div className="App">
      <form>
        <input type="number" name="result "></input>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={addOne}>button +1</button>
      <button onClick={minusOne}>button -1</button>
      <h1>{result}</h1>
    </div>
  );
}

export default App;
