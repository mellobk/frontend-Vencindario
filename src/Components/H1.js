
import React, { Fragment } from "react";
import styled from 'styled-components'




export const  H1  = (props) => {

    
    const h1Styles = {
        color: `${props.color}`,
        fontSize:`${props.sizeText}`,
        textAlign:`${props.aling}`,
        margin:'0'
      };
        return (

            <h1 style={h1Styles} >{props.text}</h1>

        ) 
}

export default H1;