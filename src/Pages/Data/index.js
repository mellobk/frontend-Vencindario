import React, { Component, Fragment } from "react";
/* import styled from "styled-components"; */
import "../../Css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import H2 from "../../Components/H2";
import "bootstrap/dist/css/bootstrap.min.css";
import ExcelImg from "../../Img/ExcelImg.png";

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

class DataPage extends Component {
  async componentDidMount() {}

  componentDidUpdate() {
    /*   console.log('prevProps State',prevProps)
   console.log('prevState State',prevState)
   console.log('snapshot State',snapshot)
  */
  }

  componentWillUnmount() {}

  showPreview(e) {
    this.setState({ src: this.state.prevSend });
  }

  render() {
    return (
      <Fragment>
        <div className="main-content fade-in ">
          <div className="container-fluid" style={{marginTop:'25px',marginBottom:'25px'}}>
            <div className="row">
              <div className="col-6">
                <img style={{width:'100%'}} src={ExcelImg} alt='excel IMG' />
                <H2
                  aling="center"
                  sizeText={"14px"}
                  color="black"
                  text="BASE DE DATOS"
                />
              </div>
              <div className="col-6">
                <img style={{width:'100%'}} src={ExcelImg} alt='excel IMG'/>
                <H2
                  aling="center"
                  sizeText={"14px"}
                  color="black"
                  text="HISTORIAL DE EVENTOS"
                />
              </div>
              <div className="col-6">
                <img style={{width:'100%'}} src={ExcelImg} alt='excel IMG'/>
                <H2
                  aling="center"
                  sizeText={"14px"}
                  color="black"
                  text="LISTA DE PRECIOS"
                />
              </div>
              <div className="col-6">
                <img style={{width:'100%'}} src={ExcelImg} alt='excel IMG'/>
                <H2
                  aling="center"
                  sizeText={"14px"}
                  color="black"
                  text="LINKS"
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

//conectar tareas al reducer y traer las acciones del tareas actions
/* const mapStateToProps = reducers => {
  return reducers.HomeReducer;
}; */
//conectar tareas al reducer y traer las acciones del tareas actions
export default DataPage;
