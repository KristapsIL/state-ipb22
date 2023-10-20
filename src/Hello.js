import {useState } from "react";
function Hello(props){
    const [name, setName] = useState(props.defaultName);
    function handleNameChange(event){
        setName(event.target.value);
      }
    return(
        <div key={props.index}>
            <input value={name} onChange={handleNameChange}></input>
            <p>Hello, {name}</p>
        </div>
    )
}
export default Hello;