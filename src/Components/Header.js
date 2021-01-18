
import React, { Fragment } from "react";
import styled from 'styled-components'
import H1 from './H1'
import { Link } from "react-router-dom";
import profileImg from "../Img/profileImg.png";
import homeImg from "../Img/homeImg.png";


const HeaderContainer = styled.div`
  background-color:black;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
 
`

const HeaderNameContainer = styled.div`
  background-color:#E8E1A3;
  width:${window.innerWidth>600?'40%':"70%"};
  display:flex;
  margin:0 auto;
  text-align:center;
  border-bottom-left-radius: 33px;
  border-bottom-right-radius: 33px;
 
`
const IconStyle = {
    color: `white`,

  };


export const  HeaderApp  = (props) => {
  
        return (
            <Fragment>
          <HeaderContainer>      
          <Link to="/Home"><img src={homeImg} alt='img home Img'  style={{...IconStyle,marginRight:'20px',width:'27%',float:'right'}}/></Link>
          <Link to={'/Home'} style={{textDecoration:'none', color:'black'}} >  
            <H1
            aling='center'            
            text='ByPlanner'            
            style={{margin:'10px',color:'white',fontSize:'2rem'}}
            />
            </Link> 
             <Link to="/HomePage"><img src={profileImg} alt='img profile Img' style={{...IconStyle,marginLeft:'20px',width:'27%'}}/> </Link>
           </HeaderContainer>
        <HeaderNameContainer>
           <Link to={'/HomePage'} style={{textDecoration:'none', color:'black',margin:'0 auto'}}>  <h2 style={{fontSize:'14px',textAlign:'center', textDecoration:'none', width:'100%',marginTop:window.innerWidth>600?'12px':'4px'}}>{props.userInfo.user_plataform_name?props.userInfo.user_plataform_name.toUpperCase():''}</h2></Link>
        </HeaderNameContainer>
        </Fragment>
        ) 
}


export default HeaderApp;