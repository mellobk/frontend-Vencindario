
import React, { /* Fragment */ } from "react";
/* import styled from 'styled-components' */
import Modal from "react-bootstrap/Modal";



export const  Modals  = (props) => {


        return (

            <Modal show={props.post_modal} onHide={props.showPostModal} style={{marginTop:'80px'} }>
          
            <Modal.Body style={{overflow:'auto'}}>
              
            {props.FormCard}
  
           {/*  <FormCard buttonName='crear nuevo comentario' newContent={this.props.crearNuevocomentario}/> */}
  
            </Modal.Body>
          </Modal> 

        ) 
}

export default Modals;