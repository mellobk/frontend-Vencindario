import React, { Component, /* Fragment */ } from "react";
import * as AppAction from '../../Actions/AppAction'
import { connect } from "react-redux"; 
/* import { Link } from "react-router-dom";
import { connect } from "react-redux"; */
//import * as HomeAction from "../../actions/HomeAction";
//import "./Styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
/* import Carrousel from "../../Components/Carrousel"; */
import styled from "styled-components";
/* import Spinner from "../../Global/Spinner";
import Fatal from "../../Global/Fatal";
import Success from "../../Global/Success";

import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import Modal from "react-bootstrap/Modal"; */
import { URL } from '../../Global/url'
import MenuScroll from '../../Components/Menu'
import fotoPrueba from "../../Img/fotoPrueba.png";
import ProfilePage from '../Profile'
import DataPage from '../Data'
import AssistantPage from '../AssistantPage'
import PlataformInfo from '../PlataformInfo'
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
    const { logOut } = this.props;

    if(!window.localStorage.getItem("token") ){
      logOut()
    }

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
       
            <div className='avatarModeloPerfilAssistant'>
              
            <img alt='avatar perfil' className='avatarModeloPerfilimg' src={this.props.app_user_info.profile_picture_miniature?`${URL}getImageOriginal/${this.props.app_user_info.profile_picture_miniature}`:`${URL}getImageOriginal/defaultLogoMiniture.jpg`} />
          </div>

          <DivSeparator ></DivSeparator>
          <MenuScroll menuSelected={this.menuSelected} infoPlataform={this.props.app_plataform_info} />

          {this.state.menuItem==="MI PERFIL"?<ProfilePage userInfo={this.props.app_user_info}/>:''}
          {this.state.menuItem==="DATA"?<DataPage/>:''}
          {this.state.menuItem==="MI ASISTENTE"?<AssistantPage/>:''}
          {this.state.menuItem==="DATOS PLATAFORMA"?<PlataformInfo/>:''}
      </div>
    );
  }
}

//conectar tareas al reducer y traer las acciones del tareas actions
/* const mapStateToProps = reducers => {
  return reducers.HomeReducer;
}; */
//conectar tareas al reducer y traer las acciones del tareas actions

const mapStateToProps = ({ AppReducer }) => AppReducer
export default connect(mapStateToProps, AppAction)(HomePage)

