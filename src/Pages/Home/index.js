import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//import * as HomeAction from "../../actions/HomeAction";
//import "./Styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Carrousel from "../../Components/Carrousel";
import Spinner from "../../Global/Spinner";
import Fatal from "../../Global/Fatal";
import Success from "../../Global/Success";
import { Redirect } from "react-router-dom";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";

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
        <Carrousel titleText="PRIMEROS PASOS" />
        <Carrousel titleText="SERVICIOS PARA TI Y SUS BENEFICIOS" />
        <Carrousel titleText="SERVICIOS PARA TUS CLIENTES Y BENEFICIOS PARA TI" />
        <Carrousel titleText="SERVICIOS PARA TUS CLIENTES Y BENEFICIOS PARA ELLOS" />
      </div>
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
