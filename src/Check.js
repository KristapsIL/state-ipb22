import {useState } from "react";
function Check(props){
    const [check, setCheck] = useState(props.defCheck)
    return(
        <>
        <input type="checkbox" checked={check} onChange={() => {setCheck(!check)}} />
        </>
    )
}
export default Check;