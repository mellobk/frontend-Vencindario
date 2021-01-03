
import React, { /* Fragment */ } from "react";
import styled from 'styled-components'

const ButtonFormnulario = styled.input`
     width: 100%;
    height: 2.2rem;
    text-indent: 6px;
    font-size: 0.8rem;
    vertical-align: middle;
  background: none;
  border:none;
  -webkit-box-shadow: 1px 0px 12px 0px rgba(50, 50, 50, 0.36);
-moz-box-shadow:    1px 0px 12px 0px rgba(50, 50, 50, 0.36);
box-shadow:         1px 0px 12px 0px rgba(50, 50, 50, 0.36);
`

const TitleText = styled.h2`
font-size:13px;
margin-left:10px;
`

const ContenedorFromButton = styled.div`
 
`


export const  ButtonForm  = (props) => {
  
        return (

          <ContenedorFromButton  style={{marginTop:props.mt,width:'100%'}}>         
          <TitleText>{props.titleText}</TitleText>
          <ButtonFormnulario
          type={props.typeText}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onchange}/>
           </ContenedorFromButton>

        ) 
}

export default ButtonForm;