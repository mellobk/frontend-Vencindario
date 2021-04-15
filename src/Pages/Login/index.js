import React, { Component } from "react";
//import { connect } from 'react-redux'
import * as AppAction from "../../Actions/AppAction";
import "./Styles.css";
import { connect } from "react-redux";
import styled from "styled-components";
import H1 from "../../Components/H1";
import LoginImg from "../../Img/login.png";
import ButtonForm from "../../Components/ButtonForm";
import Loading from "../../Components/Loading";

const LoginImgStyle = styled.img`
  width: 50%;
  display: flex;
  margin: 0 auto;
`;

class Login extends Component {
  state = {
    loginText: "",
  };

  async componentDidMount() {
     
  }

  deshabilitar = () => {
    const { usuario_id, cargando } = this.props;
    if (cargando) {
      return false;
    }

    if (!usuario_id) {
      return true;
    }
    return false;
  };

  login = () => {
  
    const { login } = this.props;
    const { loginText } = this.state;
    const data = {
      email: loginText,
    };

    login(data);
  };

  render() {
    const { error, cargando, success } = this.props

    console.log(this.props)
    const HeaderContainer = styled.div`
      background-color: black;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `;

    const styleButon = {
        width: "80%",
    };

    return (
      <div
        className="container-fluid"
        style={{ marginTop: "25px", marginBottom: "25px" }}
      >
        <div className="row">
          <div className=" col-md-10 mx-auto">
            <LoginImgStyle src={LoginImg} />
            <div className="">
              <HeaderContainer>
                <H1
                  aling="center"
                  style={{ margin: "10px", color: "white", fontSize: "2rem" }}
                  text="Login"
                />
              </HeaderContainer>

              <div className="log_inputs">
                <input
                  className="login_input_user"
                  type="email"
                  placeholder={"Ingrese un correo"}
                  value={this.state.loginText}
                  onChange={(e) => {
                    this.setState({ loginText: e.target.value });
                  }}
                />
              </div>
              <div className="log_inputs">
                <ButtonForm text={"login"} style={styleButon} actionClick={this.login}></ButtonForm>
              </div>

              <div className="action_div">{<Loading error={error} cargando={cargando} success={success}/>}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//conectar tareas al reducer y traer las acciones del tareas actions
//const mapStateToProps = ({ LoginReducer }) => LoginReducer
//conectar tareas al reducer y traer las acciones del tareas actions
const mapStateToProps = ({ AppReducer }) => AppReducer;
//conectar tareas al reducer y traer las acciones del tareas actions
export default connect(mapStateToProps, AppAction)(Login);
