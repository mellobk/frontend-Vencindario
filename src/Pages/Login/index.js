import React, { Component } from "react"
//import { connect } from 'react-redux'
import * as AppAction from '../../Actions/AppAction'
import "./Styles.css";
import { connect } from 'react-redux'
import Spinner from '../../Global/Spinner'
import Fatal from '../../Global/Fatal'
import styled from 'styled-components'
import H1 from '../../Components/H1'
import { URL } from '../../Global/url'

const backGroundImg=`${URL}getImageOriginal/backImg.png`
const LoginDiv = styled.div`
    background-image: url(${backGroundImg});
    width: 100%;
    background-color: #f8f8ff;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
`


class Login extends Component {

    async componentDidMount( ) {

        const { comprobartoken } = this.props;
    
        if(window.localStorage.getItem("token") ){
            comprobartoken()
        }
       
      }

      
    cambioUsuarioId = (e) => {
        this.props.cambioUsuarioId(e.target.value)
    }

    cambioTitulo = (event) => { 
        this.props.cambioTitulo(event.target.value)
    }

    deshabilitar = () => {
        const { usuario_id, cargando } = this.props
        if (cargando) {
            return false;
        }

        if (!usuario_id) {
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
        console.log('nuevo login')
        const {
            usuario_id,
            agregar,
        } = this.props
        const nueva_tarea = {
            username: usuario_id,
        }

        agregar(nueva_tarea)


    }


    render() {
        const HeaderContainer = styled.div`
        background-color:black;
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
       
      `
      
        return (
            <LoginDiv>
                <div className='login__div__container'>
                <HeaderContainer>      
         
                
            <H1
            aling='center'
            style={{margin:'10px',color:'white',fontSize:'2rem'}}
            text='ByPlanner'
            />
             
           </HeaderContainer>
           
                  <div className='log_inputs'>
                  <input
                        className='login_input_user'
                        type='number'
                        value={this.props.usuario_id}
                        onChange={this.cambioUsuarioId}
                    />
                  </div>

             <div className='login__button__div'>
             <button    className='button__login'
                        onClick={this.guardar}
                        disabled={this.deshabilitar()}>
                        Login
                </button>
             </div>
                  <div className='action_div'>
                  {this.mostrarAccion()}
                  </div>
                  

                   
                </div>


            </LoginDiv>
        )
    }


}




//conectar tareas al reducer y traer las acciones del tareas actions
//const mapStateToProps = ({ LoginReducer }) => LoginReducer
//conectar tareas al reducer y traer las acciones del tareas actions
const mapStateToProps = ({ AppReducer }) => AppReducer
//conectar tareas al reducer y traer las acciones del tareas actions
export default connect(mapStateToProps, AppAction)(Login)
