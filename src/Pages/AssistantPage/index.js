import React, { Component, /* Fragment */ } from "react";
//import * as HomeAction from "../../actions/HomeAction";
//import "./Styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import fotoPrueba from "../../Img/fotoPrueba.png";
import H2 from "../../Components/H2";

class AssistantPage extends Component {
  state = {
    preview: null,
    show: false,
    src: null,
    prevSend: null,
    menuItem: "MI PERFIL",
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
    console.log("close");
  };

  async componentDidMount() {
    this.setState({ src: fotoPrueba });
  }

  menuSelected = (data) => {
    if (data) {
      this.setState({ menuItem: data });
    }
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="main-content fade-in ">
        <div className="avatarModeloAsistentePerfil">
          <img
            alt="avatar perfil"
            className="avatarModeloPerfilAsistenteimg"
            src={this.state.src}
          />
        </div>

        <H2
          aling="center"
          sizeText={"16px"}
          color="black"
          text="JAKELINE VILLA"
        />

        <H2 aling="center" sizeText={"16px"} color="black" text="313850660" />

        <H2
          aling="center"
          sizeText={"16px"}
          color="black"
          text="jakevilla@byplanner.com"
        />
      </div>
    );
  }
}

//conectar tareas al reducer y traer las acciones del tareas actions
/* const mapStateToProps = reducers => {
  return reducers.HomeReducer;
}; */
//conectar tareas al reducer y traer las acciones del tareas actions
export default AssistantPage;
