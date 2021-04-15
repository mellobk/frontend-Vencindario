
import React, { /* Fragment */ } from "react";
import { Fragment } from "react";

export const ComentaryCard = (props) => {


    return (

      
        <Fragment>

            
        <div style={{ margin: '0 auto', position: 'relative', display: 'grid', width: '80%',borderBottom: 'solid', marginTop: '5px',wordBreak:'break-all'}} key={props.keyItem}>

           
      
        <h2>{props.comentaryInfo.nombre}</h2>
      

            <span style={{ textAlign: 'justify' }}>{props.comentaryInfo.contenido}</span>
            <span style={{ textAlign: 'right' }}>{props.comentaryInfo.email}</span>
            <span style={{ textAlign: 'right' }}>{new Date(props.comentaryInfo.created_at).toLocaleString("en-US", {timeZone: "America/New_York"})}</span>
        
                     
        </div>

               



</Fragment>





    )
}

export default ComentaryCard;