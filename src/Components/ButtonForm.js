
import React, { /* Fragment */ } from "react";


export const  ButtonForm  = (props) => {
  
        return (

    <button style={props.style} onClick={props.actionClick}>
         {props.text}
    </button>

        ) 
}

export default ButtonForm;