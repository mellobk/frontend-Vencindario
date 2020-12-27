import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Avatar from "react-avatar-edit";
import "../../Css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonForm from "../../Components/ButtonForm";
import Modal from "react-bootstrap/Modal";

import fotoPrueba from "../../Img/fotoPrueba.png";


/* import { Link } from "react-router-dom";
import { connect } from "react-redux"; */
//import * as HomeAction from "../../actions/HomeAction";
/* import Spinner from "../../Global/Spinner";
import Fatal from "../../Global/Fatal";
import Success from "../../Global/Success";
import { Redirect } from "react-router-dom";
import { FaCheckCircle, FaTimes} from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
 */

const DivContenForm = styled.div`
  width: 85%;
  display: block;
  margin: 0 auto;
`;



class ProfileData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: null,
      show: false,
      src: null,
      prevSend: null,
    };

    this.onCrop = this.onCrop.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this);
  }

  onClose() {
    this.setState({ preview: null });
  }

  onCrop(preview) {
    this.setState({ preview });
  }

  onBeforeFileLoad(elem) {
    /*   if(elem.target.files[0].size > 71680){
      alert("File is too big!");
      elem.target.value = "";
    }; */

    console.log(elem.target.files[0])
     this.setState({ prevSend: URL.createObjectURL(elem.target.files[0])});
  }

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

  componentDidUpdate() {
    /*   console.log('prevProps State',prevProps)
   console.log('prevState State',prevState)
   console.log('snapshot State',snapshot)
  */

  }


  componentWillUnmount() {}


  showPreview(e){
    this.setState({ src: this.state.prevSend });
  }


  render() {
    return (
      <Fragment>
        <div className="main-content fade-in " style={{marginBottom:'25px'}}>


          <DivContenForm>
            <div>
              <img
                alt="img del perfil"
                src={this.state.src}
                style={{ width: "100%",height: '54vw',objectFit:'contain' }}
        
              />
              <button className='buttonEdit'
                onClick={() => {
                  this.showModal();
                }}
              >
                Editar
              </button>
            </div>
            <ButtonForm
              titleText="NOMBRE"
              placeholder="Ingrese Nombre"
              onchange
            />

            <ButtonForm
              titleText="MARCA"
              placeholder="Ingrese Marca"
              onchange
            />

            <ButtonForm
              titleText="CELULAR"
              placeholder="Ingrese Celular"
              onchange
            />

            <ButtonForm
              titleText="CIUDAD DE OPERACIÓN"
              placeholder="Ingrese Ciudad"
              onchange
            />

            <ButtonForm
              titleText="FECHA DE NACIMIENTO"
              placeholder="Ingresar fecha de nacimiento"
              onchange
            />

            <ButtonForm
              titleText="SEDES PROPIAS +"
              placeholder="Ingresar Sedes"
              onchange
            />

            <ButtonForm
              titleText="CANTIDAD DE INVITADOS PROMEDIOS TICKET PROMEDIO DE EVENTOS"
              placeholder="Ingresar Cantidas De invitados"
              onchange
            />

            <ButtonForm
              titleText="INSTAGRAM"
              placeholder="Ingresar Cantidas De invitados"
              onchange
            />

            <ButtonForm
              titleText="FACEBOOK"
              placeholder="Ingresar Cantidas De invitados"
              onchange
            />
          </DivContenForm>
        </div>

        <Modal show={this.state.show} onHide={this.hideModal} centered>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div style={{ width: "100%" }}>
              <Avatar 
                width={"100%"}
                height={183}
                onCrop={this.onCrop}
                onClose={this.onClose}
                src={this.state.src}
                onBeforeFileLoad={this.onBeforeFileLoad}
              />
              
              <img
                src={this.state.preview}
                alt="Preview"
                style={{ display: "flex", margin: "0 auto" }}
              />
              <button onClick={(e)=>{this.showPreview()}}>Guardar</button>
            </div>
          </Modal.Body>
        </Modal>
      </Fragment>
    );
  }
}

//conectar tareas al reducer y traer las acciones del tareas actions
/* const mapStateToProps = reducers => {
  return reducers.HomeReducer;
}; */
//conectar tareas al reducer y traer las acciones del tareas actions
export default ProfileData;
