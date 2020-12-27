import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//import * as HomeAction from "../../actions/HomeAction";
//import "./Styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Carrousel from "../../Components/Carrousel";
import styled from "styled-components";
import Spinner from "../../Global/Spinner";
import Fatal from "../../Global/Fatal";
import Success from "../../Global/Success";
import { Redirect } from "react-router-dom";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import MenuScroll from '../../Components/Menu'
import fotoPrueba from "../../Img/descarga.jpg";
import ProfilePage from '../Profile'
import DataPage from '../Data'
const DivSeparator = styled.div`
    margin-top: 5px;
    width: 100%;
    background-color: rgba(210,220,220,0.3);
    border: 0.1px solid rgba(210,220,220,0.2);
    box-shadow: -1px 12px 10px 2px rgba(210,220,220,0.87);
    -webkit-box-shadow: -1px 4px 7px 2px rgba(210,220,220,0.87);
    -moz-box-shadow: -1px 12px 10px 2px rgba(210,220,220,0.87);
`

class HomePage extends Component {
  state = {
    preview: null,
    show: false,
    src: null,
    prevSend: null,
    menuItem:'MI PERFIL'
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
    console.log("close");
  };

  async componentDidMount() {
   
    this.setState({ src: fotoPrueba });
  }
  

  menuSelected=(data)=>{

    if(data){
      this.setState({ menuItem: data });
    }
  

  }

  componentDidUpdate() {
    console.log(this.state)
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="main-content fade-in ">


        
            <div className='avatarModeloPerfil'>
            <img alt='avatar perfil' className='avatarModeloPerfilimg' src={this.state.src} />
          </div>

          <DivSeparator ></DivSeparator>
          <MenuScroll menuSelected={this.menuSelected} />

          {this.state.menuItem==="MI PERFIL"?<ProfilePage/>:''}
          {this.state.menuItem==="DATA"?<DataPage/>:''}
      </div>
    );
  }
}

//conectar tareas al reducer y traer las acciones del tareas actions
/* const mapStateToProps = reducers => {
  return reducers.HomeReducer;
}; */
//conectar tareas al reducer y traer las acciones del tareas actions
export default HomePage;
