import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import "../Css/menu.css";
import * as AppAction from '../Actions/AppAction'
import {
  IoIosMenu
} from "react-icons/io";
import {
  FaHome,
  FaFontAwesomeFlag,
  FaCalendarAlt,
} from "react-icons/fa";

export class Menu extends Component {
  componentDidMount() {
    this.menuJs()

  }

  toggleMenu(event) {
    document
      .getElementsByClassName("navbar-primary")[0]
      .classList.toggle("collapsed");
      document.getElementsByClassName("navbar-primary-bg")[0]
      .classList.toggle("collapsed");
  }

 menuJs(){
  var mClass = '.sub-toggle'
  var menu = document.querySelectorAll(mClass);
   function removeClass(e, c) {
    var elm = document.querySelectorAll(mClass);
    for (var i = 0; i < elm.length; i++) {
      if (c === 'active') {
        elm[i].classList.remove('active');
      } else {
        elm[i].querySelector('.list').classList.remove('show');
      }
    }
  } 


  menu.forEach(function(o) {
    
    o.addEventListener('click', function(e) {
      
      removeClass(o, 'active');
      this.classList.add('active');
      removeClass(o);
      this.querySelector('.list').classList.toggle('show');
    });

    
  }); 
 }


  logOut=(event)=>{
event.preventDefault()
const { logOut } = this.props;
logOut()

  }


  

  ponerMenu = () => {

    return (
      <Fragment>

        <nav className="navbar  fixed-top navbar-inverse navbar-global navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              {/*    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>  */}
            </div>
            <div id="navbard" className="">
              <ul className="nav navbar-nav navbar-user navbar-right">
                <li>
                  <Link to="#"
                  onClick={(e) => this.logOut( e)}
                  >
                    <span className="glyphicon glyphicon-log-out" 
                      ></span> Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav className="navbar-primary collapsed">
          <ul className="navbar-primary-menu">
            <div onClick={e => this.toggleMenu()} className="navbar-primary-bg collapsed">

            </div>
            <li className="nav-label">
              <img
                alt="menuLogo"
                className="profil_img"
                src={``}
              />
            </li>
            <li className="nav-label">
              <span className="welcometext">
                {" "}
                {`¡Bienvenido, ${
                window.localStorage.getItem("email")
                }!`}
              </span>
            </li>
            <li
              className="btn-expand-collapse"
              onClick={e => this.toggleMenu()}
            >
              <span>
                <IoIosMenu size={"16px"} className="icon_color" />
              </span>
            </li>
            <li>
              <h1 className="menuSeparator">
                <span className="nav-label">MENÚ</span>
              </h1>
              <Link to="/Home">
                <span>
                  <FaHome size={"16px"} className="icon_color" />
                </span>
                <span className="nav-label">Inicio</span>
              </Link>
              <Link onClick={e=>this.props.showPostModal(true)} to="#">
                <span>
                  <FaFontAwesomeFlag size={"16px"} className="icon_color" />
                </span>
                <span  className="nav-label">Publicar post</span>
              </Link>

              <Link to="#">
                <span>
                  <FaCalendarAlt size={"16px"} className="icon_color" />
                </span>
                <span className="nav-label">Mi perfil</span>
              </Link>

              <Link to="#">
                <span>
                  <FaCalendarAlt size={"16px"} className="icon_color" />
                </span>
                <span className="nav-label">Mensajes</span>
              </Link>

              <Link to="#">
                <span>
                  <FaCalendarAlt size={"16px"} className="icon_color" />
                </span>
                <span className="nav-label">Grupos</span>
              </Link>
      

            

          
           
        
            </li>
          </ul>
        </nav>

   
      </Fragment>

      
    );
  };

  render() {
   

    return this.ponerMenu();

    
  }
}

const mapStateToProps = ({ AppReducer }) => AppReducer
//conectar tareas al reducer y traer las acciones del tareas actions
export default connect(mapStateToProps, AppAction)(Menu)

