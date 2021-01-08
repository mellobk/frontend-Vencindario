import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import * as AppAction from '../src/Actions/AppAction'
import { connect } from 'react-redux'
import Home from './Pages/Home'
import { Redirect } from "react-router-dom";
import HomePage from './Pages/Homepage'
import Header from './Components/Header'
import LoginVales from './Pages/Login'
/* import axios from 'axios'
import {URL} from '../src/Global/url' */

class App extends Component {
  
  async componentDidMount() {
    const { getUserInfo,getUserInfoAssistant,accesRegister } = this.props;
    getUserInfo()
    getUserInfoAssistant()  
    accesRegister('entrada')
   
   
  }

  componentWillUnmount() {
   
  }

  render() {

/*     
    window.addEventListener("beforeunload", async function (e) {  
      e.preventDefault()      
      let headers = {
        "Content-Type": "application/json",
        'Authorization': window.localStorage.getItem('token')
    }
    await axios.get(URL+`accesRegister/salida`,{
        headers: headers
    })
      return;
    }); */
 
    return (
      <BrowserRouter>

        {/*divpara las dar stilos a el menu*/}
       

          {

            this.props.isAuth
            
              ? <Route >
                <Header  userInfo={this.props.app_user_info}/>
                <Route exact path='/Home' component={Home} />
                <Route exact path='/HomePage' component={HomePage} /> 
              </Route>
              : <Route>
               {/*  <Route exact path='/' component={Home} /> */}
                
                <Route exact path='/' component={LoginVales} /> 
                
                
              </Route>



          }

          {
             this.props.isAuth ? <Redirect to='/Home' /> : <Redirect to='/' />
/* 
            this.props.isAuth ? <Redirect to='/Home' /> : <Redirect to='/' /> */
          }
   


      </BrowserRouter>

    )
  }
}

/* const mapStateToProps = ({ LoginReducer }) => LoginReducer */
//conectar tareas al reducer y traer las acciones del login actions
const mapStateToProps = ({ AppReducer }) => AppReducer
//conectar tareas al reducer y traer las acciones del tareas actions
export default connect(mapStateToProps, AppAction)(App)
