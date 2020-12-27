import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Pages/Home'
import HomePage from './Pages/Homepage'
import Header from './Components/Header'




class App extends Component {

  componentDidMount() {

  }

  render() {


    return (
      <BrowserRouter>

        {/*divpara las dar stilos a el menu*/}
       

          {

            this.props.isAuth
            
              ? <Route >
            {/*     <Menu /> */}
                <Route exact path='/' component={Home} />
              </Route>
              : <Route>
               {/*  <Route exact path='/' component={Home} /> */}
               <Header /> 
                <Route exact path='/' component={Home} /> 
                <Route exact path='/HomePage' component={HomePage} /> 
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