

import React, { /* Fragment */ } from "react";
import Spinner from '../Global/Spinner'
import Fatal from '../Global/Fatal'
import Success from '../Global/Success'

export const  Loading  = (props) => {


    const mostrarAccion = () => {


       
        if (props.cargando) {
            return <Spinner />;
        }


        if (props.success) {
            return <Success mensaje={props.success} />;
        }


        if (props.error) {
            return <Fatal mensaje={props.error} />;
        }
        return false;
    }

        return (

           mostrarAccion()

        ) 
}

export default Loading;

