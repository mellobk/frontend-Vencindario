import React, { Component } from "react";
import * as AppAction from '../../Actions/AppAction'
import { connect } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import Carrousel from "../../Components/Carrousel";
import closeButton from "../../Img/closeButton.png";
/* import Spinner from "../../Global/Spinner";
import Fatal from "../../Global/Fatal";
import Success from "../../Global/Success";
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
  state = { show: false,video:'',textModal:'' };

  showModal = () => {
    this.setState({ show: true });
  };


  sendInfoModal = (video,text) => {
    this.setState({ video: video,textModal:text });
    
  };



  hideModal = () => {
    this.setState({ show: false });
    console.log("close");
  };

  async componentDidMount( ) {

  /*   window.onfocus = function() { console.log('focus'); };
    window.onblur = function() { console.log('blur'); } */
    const { logOut,obtener_carusel,getUserInfo,getInfoPlataform } = this.props;

    if(!window.localStorage.getItem("token") ){
      logOut()
    }
    obtener_carusel()
    getUserInfo()
    getInfoPlataform()
   
 
   
   
  }

  
  componentDidUpdate() {
   
  
  }

  componentWillUnmount() {}

  render() {
  
    return (

    
      <div className="main-content fade-in ">
        
 
        
        {
               this.props.app_carrusel.map((carrusel, key) => (
                <div key={key} style={{marginTop:"25px"}}>
               { carrusel.item_carrusel.length>0?
                <Carrousel key={key} items={carrusel.item_carrusel} showModal={this.showModal} sendInfoModal={this.sendInfoModal} titleText={carrusel.title_carrusel} />:""}
                </div>
        
              ))
        }

    


      <Modal show={this.state.show} onHide={this.hideModal} style={{marginTop:'80px'} }>
          
          <Modal.Body style={{backgroundColor:'#e8e1a4',overflow:'auto', height:'80vh'}}>
            
  <ImgBotonCerrarModal alt='boton de cerrado de modal'  src={closeButton} onClick={()=>this.hideModal()}/>
  <iframe
            width="100%"
            title="video"
            height="315"
            src={this.state.video}
            contols="2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
            <p  style={{overflow:'auto', maxHeight: '100%',overflowWrap:'break-word'}}>{this.state.textModal}</p>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}


const mapStateToProps = ({ AppReducer }) => AppReducer
export default connect(mapStateToProps, AppAction)(Home)

