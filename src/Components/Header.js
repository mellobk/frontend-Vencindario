
import React, { Fragment } from "react";
import styled from 'styled-components'
import H1 from './H1'
import { RiHomeLine} from "react-icons/ri";
import { Link } from "react-router-dom";




const HeaderContainer = styled.div`
  background-color:black;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
 
`

const HeaderNameContainer = styled.div`
  background-color:#E8E1A3;
  width:55%;
  display:flex;
  margin:0 auto;
  text-align:center;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
 
`
const IconStyle = {
    color: `white`,

  };


export const  HeaderApp  = (props) => {
  
        return (
            <Fragment>
          <HeaderContainer>      
          <Link to="/"><span ><RiHomeLine size={'20px'} style={{...IconStyle,marginRight:'20px'}} /></span> </Link>
                
            <H1
            aling='center'
            color='white'
            text='ByPlanner'
            />
             <Link to="/HomePage"> <span ><RiHomeLine size={'20px'} style={{...IconStyle,marginLeft:'20px'}} /></span> </Link>
           </HeaderContainer>
        <HeaderNameContainer>
             <h2 style={{fontSize:'14px',textAlign:'center',width:'100%',marginTop:'4px'}}>BRAYAN  ALEXANDER MANRIQUE BONILLA</h2>
        </HeaderNameContainer>
        </Fragment>
        ) 
}

export default HeaderApp;