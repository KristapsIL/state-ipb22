import {useState } from "react";
function LabelCheck(props){
    const [check ,setCheck] = useState(props.checked)
    return(
        <>
            <label>
                {props.label}
                <input type="checkbox" checked={check} onChange={() => {setCheck(!check)}}/>
            </label>
        </>
    )
}
export default LabelCheck;