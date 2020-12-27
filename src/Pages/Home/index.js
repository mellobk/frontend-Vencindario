import React, { Component } from "react";
//import * as HomeAction from "../../actions/HomeAction";
//import "./Styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Carrousel from "../../Components/Carrousel";
import closeButton from "../../Img/closeButton.png";
/* import Spinner from "../../Global/Spinner";
import Fatal from "../../Global/Fatal";
import Success from "../../Global/Success";
import { Redirect } from "react-router-dom";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai"; */
import Modal from "react-bootstrap/Modal";


const ImgBotonCerrarModal = styled.img`
    position: fixed;
    vertical-align: middle;
    border-style: none;
    width: 11%;
    margin-top: -18vw;
    right: 6px;
    transition-property: all;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;
`;

/* const ButtonCerrarModal = {
  position: 'fixed',
  verticalAlign: 'middle',
  borderStyle: 'none',
  width: '14%',
  top:' 23px',
  right:' 6px',
}; */

class Home extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
    console.log("close");
  };

  async componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="main-content fade-in ">
      <div style={{marginTop:"15px"}}>
        <Carrousel showModal={this.showModal} titleText="PRIMEROS PASOS" />
        <Carrousel titleText="SERVICIOS PARA TI Y SUS BENEFICIOS" />
        <Carrousel titleText="SERVICIOS PARA TUS CLIENTES Y BENEFICIOS PARA TI" />
        <Carrousel titleText="SERVICIOS PARA TUS CLIENTES Y BENEFICIOS PARA ELLOS" />
      </div>


      <Modal show={this.state.show} onHide={this.hideModal} style={{marginTop:'80px'} }>
          
          <Modal.Body style={{backgroundColor:'#e8e1a4',overflow:'auto', height:'80vh'}}>
            
  <ImgBotonCerrarModal alt='boton de cerrado de modal'  src={closeButton} onClick={()=>this.hideModal()}/>
  <iframe
            width="100%"
            title="video"
            height="315"
            src="https://www.youtube.com/embed/l5nnc7iWDRM"
            contols="2"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
            <p  style={{overflow:'auto', maxHeight: '100%'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
             Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut </p>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

//conectar tareas al reducer y traer las acciones del tareas actions
/* const mapStateToProps = reducers => {
  return reducers.HomeReducer;
}; */
//conectar tareas al reducer y traer las acciones del tareas actions
export default Home;
