
import React, { useState,Fragment } from "react";


export const  FormCard  = (props) => {
  


    const [name, setName] = useState('');
    const [content, setContent] = useState('');


        return (

              <Fragment>

                  <input
                  type='text'
                  placeholder='Ingrese Nombre'
                  value={name}
                  onChange={e=>setName(e.target.value)}
                  style={{width:'100%'}}
                  />

                    <textarea
                        type="text"
                        value={content}
                        onChange={e=>setContent(e.target.value)}
                        placeholder='Ingrese Contenido'
                        style={{width:'100%',marginTop:'15px',height:'40vh'}}
                      
                    />   

                    <button  
                    disabled={!name||!content?true:false}
                    onClick={e=>props.newContent(name,content)}>
                             {props.buttonName}
                        </button>             
              </Fragment>

        ) 
}

export default FormCard;