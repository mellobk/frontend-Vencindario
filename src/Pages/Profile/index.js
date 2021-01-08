import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Avatar from "react-avatar-edit";
import * as AppAction from '../../Actions/AppAction'
import "../../Css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonForm from "../../Components/ButtonForm";
import Modal from "react-bootstrap/Modal";
import ReactCountryFlag from "react-country-flag";
import "react-flags-select/css/react-flags-select.css";
import { connect } from "react-redux";
import Spinner from '../../Global/Spinner'
import Fatal from '../../Global/Fatal'
import Success from '../../Global/Success'
//import fotoPrueba from "../../Img/fotoPrueba.png";
import {URLHomePage} from "../../Global/url"
/* import { Link } from "react-router-dom";
 */
//import * as HomeAction from "../../actions/HomeAction";
/* import Spinner from "../../Global/Spinner";
import Fatal from "../../Global/Fatal";
import Success from "../../Global/Success";
import { Redirect } from "react-router-dom";
import { FaCheckCircle, FaTimes} from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
 */
/* const options = [
  { value: '57', label: 'Chocolate' },
  { value: '58', label: 'Strawberry' },
  { value: '60', label: 'Vanilla' },
]; */

const DivContenForm = styled.div`
  width: 85%;
  display: block;
  margin: 0 auto;
`;

/* 
const SelectCountry = styled.select`
  text-transform: 'none';
  height: 2.4rem;
  margin-top: 25px;
  width: 19%;
  margin-right: 10px;
  border: none;
  background: none;
  outline: none;
` */

const DivPrefijo = styled.select`
height: 2.2rem;
margin: 25px 7px 0 -6px;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-weight: bold;
    border: none;
    width: 1.1rem;
`

const DivPrefijoDiv= styled.div`
height: 2.2rem;
    margin: 25px 7px 0 7px;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-weight: bold;
`


class ProfileData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      preview: null,
      show: false,
      src: null,
      srcLabel: null,
      prevSend: null,
      imagenSave:null,
      prefijoUser:this.props.userInfo.user_postal_code,
      selectedOption:{value:null,label:null},
    };

    this.onCrop = this.onCrop.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this);
  }

  
  mostrarAccion = () => {
    const { error, cargando, success } = this.props;
    if (cargando) {
      return <Spinner />;
    }

    if (success) {
      return <Success mensaje={success} />;
    }

    if (error) {
      return <Fatal mensaje={error} />;
    }
    return false;
  };


  mostrarAccionModalImg = () => {
    const { cargando } = this.props;
    if (cargando) {
      return <Spinner />;
    }
    return false;
  };

  onClose() {
    this.setState({ preview: null });
  }

  onCrop(preview) {
   
    this.setState({ preview });
    
  }

  onBeforeFileLoad(elem) {

    this.setState({ prevSend: URL.createObjectURL(elem.target.files[0]) });
    this.setState({ imagenSave: elem.target.files[0]});
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
    console.log("close");
  };

   componentDidMount() {
  
    this.setState({srcLabel: this.props.userInfo.profile_picture?`${URLHomePage}getImageOriginal/${this.props.userInfo.profile_picture}`:`${URLHomePage}getImageOriginal/defaultLogo.png`})
    //this.setState({ src: fotoPrueba });
  }

  componentDidUpdate() {

    console.log('prevProps State',this.props)
    /*   console.log('prevProps State',prevProps)
   console.log('prevState State',prevState)
   console.log('snapshot State',snapshot)
  */
  }
  
  editarInfo(){
    const { updateInfo,app_user_info } = this.props;

    updateInfo(app_user_info)
  }

  componentWillUnmount() {
    const { limpiarForma } = this.props;
    limpiarForma()
  }

  newImg=(elem)=>{
    this.setState({ prevSend: URL.createObjectURL(elem.target.files[0])});
    this.setState({ imagenSave: elem.target.files[0]});

  }

  async showPreview(e) {
    this.setState({ srcLabel: this.state.prevSend });
    const { guardarimagen,guardarimagenPreview } = this.props;
    const files = this.state.imagenSave;

    console.log('imagen 1',files)
    const data = new FormData();
    data.append("file0", files);
    await guardarimagen(data,'profile_picture');



    const url = this.state.preview;
    fetch(url)
      .then(res => res.blob())
      .then(blob => {
        const file2 = new File([blob], "File.jpg",{ type: "image/jpg" })
      
        const files2 = file2;
        const data2 = new FormData();
        data2.append("file0", files2);
        guardarimagenPreview(data2,'profile_picture_miniature');
      })

  


  }
  handleChangeEstado=(e)=>{

    this.setState({ prefijoUser: e.target.value});
      const { updateForm } = this.props;
    updateForm(e.target.value,'user_postal_code')
  }



  flagCountry=(data)=>{

   
    let Flag
    switch (data) {
      case '57':
        Flag="CO"
        break;
      case '593':
        Flag="EC"
        break;
        case '52':
          Flag="MX"
          break;
          case '503':
            Flag="SV"
            break;
            case '502':
              Flag="GT"
              break;
              case '506':
                Flag="CR"
                break;
                case '1':
                  Flag="US"
                  break;
                  case '507':
                    Flag="PA"
                    break;
                    case '51':
                      Flag="PE"
                      break;
                      case '54':
                        Flag="AR"
                        break;
                        case '598':
                          Flag="UY"
                          break;
                          case '55':
                            Flag="BR"
                            break;
                            case '58':
                              Flag="VE"
                              break;
                              case '591':
                                Flag="BO"
                                break;
                                case '1 809':
                                  Flag="DO"
                                  break;
                                  case '53':
                                    Flag="CU"
                                    break;
                                    case '505':
                                      Flag="NI"
                                      break;
                                      case '01':
                                        Flag="PR"
                                        break;
                                      
      default:
        Flag='CO';
    }

    return Flag
    
  }

  onchangeText=(e,name)=>{
    const { updateForm } = this.props;
    updateForm(e.target.value.toUpperCase(),name)
    
  }
  handleChange = selectedOption => {
    this.setState({ selectedOption});
    console.log(`Option selected:`, selectedOption);
  };

  render() {



    return (
      <Fragment>
        <div className="main-content fade-in " style={window.innerWidth>600 ?{ marginBottom: "25px",width: "80%", margin:'0 auto'}:{ marginBottom: "25px",width: "100%", margin:'0 auto'}}>
          <DivContenForm>
            <div style={window.innerWidth>600 ?{textAlign:'center'}:{textAlign:'auto'}}>
              <img
                alt="img del perfil"
                src={this.state.srcLabel}
                style={window.innerWidth>600 ?{ width: "100%", height: "25vw", objectFit: "contain" }:{ width: "100%", height: "54vw", objectFit: "contain" }}
              />
              <button
              style={window.innerWidth>600 ?{ marginTop: "10px" }:{ marginTop: "auto" }}
                className="buttonEdit"
                onClick={() => {
                  this.showModal();
                }}
              >
                Editar
              </button>
            </div>
            <ButtonForm
              titleText="NOMBRE"
              placeholder="Ingrese Nombre"
              onchange={(e)=>this.onchangeText(e,'user_plataform_name')}
              typeText={'text'}
              value={this.props.userInfo.user_plataform_name.toUpperCase()}
              mt='25px'
            />

            <ButtonForm
              titleText="MARCA"
              placeholder="Ingrese Marca"
              onchange={(e)=>this.onchangeText(e,'user_brand')}
              typeText={'text'}
              value={this.props.userInfo.user_brand}
              mt='25px'
            />

            <div
            style={{display:'flex',alignItems:'center', margin:'25px 0'}}>
              <ReactCountryFlag
                countryCode={this.flagCountry(this.state.prefijoUser)}
                svg
                style={{
                  fontSize: "2em",
                  lineHeight: "1em",
                  objectFit: 'cover',
                  width:'2.8rem',
                  marginTop:'25px',
                  borderRadius:'5px'
                }}
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
              />

        <DivPrefijoDiv>
           {`+${this.state.prefijoUser}`}
         </DivPrefijoDiv> 
  

                  <DivPrefijo onChange={this.handleChangeEstado}>
                      <option value="57">Colombia</option>
                      <option value="593">Ecuador</option>
                      <option value="52">México</option>
                      <option value="503">El Salvador</option>
                      <option value="502">Guatemala</option>
                      <option value="506">Costa Rica</option>
                      <option value="1">EEUU</option>
                      <option value="507">Panamá</option>
                      <option value="51">Perú</option>
                      <option value="54">Argentina</option>                      
                      <option value="598">Uruguay</option>
                      <option value="55">Brasil</option>
                      <option value="58">Venezuela</option>
                      <option value="591">Bolivia</option> 
                      <option value="1">República Dominicana</option>
                      <option value="1">Puerto Rico</option>
                      <option value="53">Cuba</option>
                      <option value="505">Nicaragua</option>
                    </DivPrefijo>
      {/*  */}
    

             <ButtonForm
              titleText="CELULAR"
              placeholder="Ingrese Celular"
              onchange={(e)=>this.onchangeText(e,'user_cellPhone')}
              typeText={'number'}
              value={this.props.userInfo.user_cellPhone}
            />
            </div>
        

            <ButtonForm
              titleText="CIUDAD DE OPERACIÓN"
              placeholder="Ingrese Ciudad"
              mt='25px'
              onchange={(e)=>this.onchangeText(e,'user_city')}
              typeText={'text'}
              value={this.props.userInfo.user_city.toUpperCase()}
            />

            <ButtonForm
              titleText="FECHA DE NACIMIENTO"
              placeholder="Ingresar fecha de nacimiento"
              onchange={(e)=>this.onchangeText(e,'user_birthday')}
              mt='25px'
              typeText={'date'}
              value={this.props.userInfo.user_birthday}
            />

            <ButtonForm
              titleText="SEDES PROPIAS +"
              placeholder="Ingresar Sedes"
              onchange={(e)=>this.onchangeText(e,'user_own_campus')}
              mt='25px'
              typeText={'text'}
              value={this.props.userInfo.user_own_campus}
            />

            <ButtonForm
              titleText="CANTIDAD DE INVITADOS PROMEDIOS TICKET PROMEDIO DE EVENTOS"
              placeholder="Ingresar Cantidas De invitados"
              onchange={(e)=>this.onchangeText(e,'user_tiket')}
              mt='25px'
              typeText={'text'}
              value={this.props.userInfo.user_tiket}
            />

            <ButtonForm
              titleText="INSTAGRAM"
              placeholder="Ingrese instagram"
              onchange={(e)=>this.onchangeText(e,'user_instagram')}
              typeText={'text'}
              value={this.props.userInfo.user_instagram}
              mt='25px'
            />

            <ButtonForm
              titleText="FACEBOOK"
              placeholder="Ingrese facebook"
              onchange={(e)=>this.onchangeText(e,'user_facebook')}
              typeText={'text'}
              value={this.props.userInfo.user_facebook}
              mt='25px'
            />
          </DivContenForm>

          <div className='action_div'>
                  {this.mostrarAccion()}
                  </div>

          <button
                className="buttonEditInformation"
                style={{marginTop:'25px 28px'}}
                onClick={() => {
                  this.editarInfo();
                }}
              >
                Guardar cambios
              </button>
        </div>

        <Modal show={this.state.show} onHide={this.hideModal} centered>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div style={{ width: "100%" }}>
              <Avatar
                width={"100%"}
                height={183}
                onCrop={this.onCrop}
                onClose={this.onClose}
                src={this.state.src}
                onBeforeFileLoad={this.onBeforeFileLoad}
                label='Cambiar foto de perfil'
              />

              

              <img
                src={`${URLHomePage}getImageOriginal/${this.props.userInfo.profile_picture_miniature}`}
                alt="Preview"
                style={{ display: "flex", margin: "0 auto" }}
              />

<div className='action_div'>
                  {this.mostrarAccionModalImg()}
                  </div>
            {/*       
                  <input
                  type='file'
                  onChange={this.onBeforeFileLoad}/> */}
              <button
             
                onClick={(e) => {
                  this.showPreview();
                }}
              >
                Guardar
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </Fragment>
    );
  }
}

//conectar tareas al reducer y traer las acciones del tareas actions
/* const mapStateToProps = reducers => {
  return reducers.HomeReducer;
}; */
//conectar tareas al reducer y traer las acciones del tareas actions
const mapStateToProps = ({ AppReducer }) => AppReducer
export default connect(mapStateToProps, AppAction)(ProfileData)

