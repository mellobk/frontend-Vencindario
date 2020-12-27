
import React, { Fragment } from "react";
import styled from 'styled-components'

const ButtonFormnulario = styled.input`
  width:100%;
  text-indent: 10px;
  border:none;
  -webkit-box-shadow: 1px 0px 12px 0px rgba(50, 50, 50, 0.36);
-moz-box-shadow:    1px 0px 12px 0px rgba(50, 50, 50, 0.36);
box-shadow:         1px 0px 12px 0px rgba(50, 50, 50, 0.36);
`

const TitleText = styled.h2`
font-size:14px;
margin-left:10px;
`

const ContenedorFromButton = styled.div`
  margin-top:25px;
`


export const  ButtonForm  = (props) => {
  
        return (

          <ContenedorFromButton>         
          <TitleText>{props.titleText}</TitleText>
          <ButtonFormnulario
          type='text'
          placeholder={props.placeholder}
          onChange={props.onChangeText}/>
           </ContenedorFromButton>

        ) 
}

export default ButtonForm;