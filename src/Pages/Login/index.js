import React, { Component } from "react"
import { connect } from 'react-redux'
//import * as LoginAction from '../../actions/LoginAction'
import "./Styles.css";
import Spinner from '../../Global/Spinner'
import Fatal from '../../Global/Fatal'
import loginImg from "../../Img/valeslogo.png";
import loginImgUser from "../../Img/loginImgUser.png";
import loginImgPassword from "../../Img/loginImgPassword.png";



class Login extends Component {

    cambioUsuarioId = (e) => {
        this.props.cambioUsuarioId(e.target.value)
    }

    cambioTitulo = (event) => { 
        this.props.cambioTitulo(event.target.value)
    }

    deshabilitar = () => {
        const { usuario_id, password, cargando } = this.props
        if (cargando) {
            return false;
        }

        if (!usuario_id || !password) {
            return true;
        }
        return false;
    }


    mostrarAccion = () => {

        const { error, cargando } = this.props
        if (cargando) {
            return <Spinner />;
        }

        if (error) {
            return <Fatal mensaje={error} />;
        }
        return false;
    }


    guardar = () => {
        const {
            usuario_id,
            password,
            agregar,
        } = this.props
        const nueva_tarea = {
            username: usuario_id,
            userpassword: password,
        }

        agregar(nueva_tarea)


    }


    render() {

        return (
            <div className='login__div'>
                <div className='login__div__container'>
                   
                   <img alt='imagenLogin' src={loginImg} className='login__img__log' />
                  <div className='log_inputs'>
                  <img  alt='imagenLoginText' src={loginImgUser} className='login_log' />
                  <input
                        className='login_input_user'
                        type='text'
                        value={this.props.usuario_id}
                        onChange={this.cambioUsuarioId}
                    />
                  </div>

                  <div className='log_inputs'>
                  <img  alt='imagenLoginPasss' src={loginImgPassword} className='login_log' />
                  <input
                        className='login_input_password'
                        type='password'
                        value={this.props.password}
                        onChange={this.cambioTitulo} />
                  </div>
             <div className='login__button__div'>
             <button    className='button__login'
                        onClick={this.guardar}
                        disabled={this.deshabilitar()}>
                        Login
                </button>
             </div>
                  
                    {this.mostrarAccion()}

                   
                </div>


            </div>
        )
    }


}




//conectar tareas al reducer y traer las acciones del tareas actions
//const mapStateToProps = ({ LoginReducer }) => LoginReducer
//conectar tareas al reducer y traer las acciones del tareas actions
export default Login