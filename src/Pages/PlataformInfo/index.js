import React, { Component, /* Fragment */ } from "react";
//import * as HomeAction from "../../actions/HomeAction";
//import "./Styles.scss";
import { connect } from "react-redux";
import * as AppAction from '../../Actions/AppAction'
import styled from "styled-components"; 
import "bootstrap/dist/css/bootstrap.min.css";
import Table from 'react-bootstrap/Table'

const DivTableStyle = styled.div`
width:80%;
position:relative;
margin:0 auto;
top:15px;
`


class PataformInfo extends Component {

  componentDidUpdate() {
    console.log(this.state);
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="main-content fade-in ">
 
 <DivTableStyle>
 <Table striped bordered hover>
  <thead>
    <tr>
    <th>NOMBRE</th>
  <th>NUMERO CELULAR</th>
  <th>NUMERO DE CONEXIONES</th>
  <th>ULTIMA CONEXION</th>
    </tr>
  </thead>
  <tbody>

  {this.props.app_plataform_info.map((item, key) => (
          <tr key={key}>
          <td>{item.user_plataform_name}</td>
          <td>{item.user_cellPhone}</td>
          <td>{item.total_conexiones}</td>
          <td>{item.ultima_conexion}</td>
        </tr>
        ))}
  </tbody>
</Table>
</DivTableStyle>
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
export default connect(mapStateToProps, AppAction)(PataformInfo)

