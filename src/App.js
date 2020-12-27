import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Pages/Home'
import HomePage from './Pages/Homepage'
import Header from './Components/Header'
import Login from './Pages/Login'



class App extends Component {

  state={
    login:true
  }
  componentDidMount() {

  }


  render() {


    return (
      <BrowserRouter>

        {/*divpara las dar stilos a el menu*/}
       

          {

            this.state.login
            
              ? <Route >
                <Header />
                <Route exact path='/' component={Home} />
                <Route exact path='/HomePage' component={HomePage} /> 
              </Route>
              : <Route>
               {/*  <Route exact path='/' component={Home} /> */}
                
                <Route exact path='/' component={Login} /> 
                
              </Route>



          }

          {
/* 
            this.props.isAuth ? <Redirect to='/Home' /> : <Redirect to='/' /> */
          }
   


      </BrowserRouter>

    )
  }
}

/* const mapStateToProps = ({ LoginReducer }) => LoginReducer */
//conectar tareas al reducer y traer las acciones del login actions
export default App