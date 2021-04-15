import React, { Component } from 'react'
import Menu from './Components/Menu'
import { BrowserRouter, Route } from 'react-router-dom'
import * as AppAction from '../src/Actions/AppAction'
import { connect } from 'react-redux'
import Home from './Pages/Home'
import { Redirect } from "react-router-dom";
import Login from './Pages/Login'
import Post from './Pages/Post'
/* import axios from 'axios'
import {URL} from '../src/Global/url' */

class App extends Component {
  
  async componentDidMount() {
    
    const { comprobartoken } = this.props;
    if(window.localStorage.getItem('id_user')){
      console.log('entro 1 carga')
      comprobartoken()
    }
  
   
   
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
              ? 
                <Route >
                <Menu />
                <Route exact path='/Home' component={Home} />
                <Route exact path='/Post/:Post_id' component={Post} />
              </Route>
              : <Route>                
                <Route exact path='/' component={Login} /> 
                 
                
              </Route>



          }

   
    { this.props.isAuth ? <Redirect to='/Home' /> : <Redirect to='/' />} 


      </BrowserRouter>

      

    )
  }
}

/* const mapStateToProps = ({ LoginReducer }) => LoginReducer */
//conectar tareas al reducer y traer las acciones del login actions
const mapStateToProps = ({ AppReducer }) => AppReducer
//conectar tareas al reducer y traer las acciones del tareas actions
export default connect(mapStateToProps, AppAction)(App)
