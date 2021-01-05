import React, { Component, /* Fragment */ } from "react";
//import * as HomeAction from "../../actions/HomeAction";
//import "./Styles.scss";
import { connect } from "react-redux";
import * as AppAction from '../../Actions/AppAction'
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import fotoWpImg from "../../Img/wpImg.png";
import H2 from "../../Components/H2";
import ReactCountryFlag from "react-country-flag";
import {URLHomePage} from "../../Global/url"



const DivPrefijo = styled.div`
height: 2.2rem;
    margin: 0 7px 0 7px;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-weight: bold;
`

class AssistantPage extends Component {
  state = {
    preview: null,
    show: false,
    src: null,
    prevSend: null,
    menuItem: "MI PERFIL",
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
    console.log("close");
  };

  async componentDidMount() {
   
  }

  menuSelected = (data) => {
    if (data) {
      this.setState({ menuItem: data });
    }
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="main-content fade-in ">
        <div className="avatarModeloAsistentePerfil">
          <img
            alt="avatar perfil"
            className="avatarModeloPerfilAsistenteimg"
            style={{marginBottom:'10px'}}
            src={`${URLHomePage}getImageOriginal/${this.props.app_user_assistant_info.assistant_profile_picture}`}
          />
        </div>

        <H2
          aling="center"
          sizeText={"16px"}
          color="black"
          text={this.props.app_user_assistant_info.assistant_name}
        />

<div
            style={{display:'flex',alignItems:'center', margin:'10px 0', justifyContent:'center'}}>
              <ReactCountryFlag
                countryCode="CO"
                svg
                style={{
                  fontSize: "2em",
                  lineHeight: "1em",
                  objectFit: 'cover',
                  width:'2.8rem',
                  borderRadius:'5px'
                }}
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="CO"
              />



         <DivPrefijo>
           +57
         </DivPrefijo>
    

         <H2 aling="center" sizeText={"16px"} color="black" text={this.props.app_user_assistant_info.assistant_cellphone} />


         <a href={`https://api.whatsapp.com/send?phone=+${this.props.app_user_assistant_info.assistant_postal_code}${this.props.app_user_assistant_info.assistant_cellphone}&text=Hola!%20Quiero%20hablar%20con%20udes!`} target="blank"> 
         <img src={fotoWpImg} alt='imagen wp' style={{width:'55%',marginLeft:'10px'}}/>
         </a>
            
     
            </div>
        
     

        <H2
          aling="center"
          sizeText={"16px"}
          color="black"
          text={this.props.app_user_assistant_info.assistant_email}
        />
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
export default connect(mapStateToProps, AppAction)(AssistantPage)

