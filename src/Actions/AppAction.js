import axios from 'axios'
import {CARGANDO,ERROR,CAMBIO_USUARIO_ID,CAMBIO_TITULO,GUARDAR,PERMISOS,TOKENVERIFY,CERRAR_SESION,CONSULTAR_DIV,CONSULTAR_INFO,SUCCESS,CONSULTAR_INFO_PLATAFORM,CONSULTAR_INFO_ASISTENTE} from '../Types/AppTypes'
import {URL} from '../../src/Global/url'
var FileSaver = require('file-saver');
//acciones para tareas 


export const cambioUsuarioId = (usuario_id) => (dispatch)=>{
    dispatch({
        type: CAMBIO_USUARIO_ID,
        payload: usuario_id
        
    })


}


export const cambioTitulo = (titulo) => (dispatch)=>{
    dispatch({
        type: CAMBIO_TITULO,
        payload: titulo
        
    })
}


export const getUserInfo = () => async(dispatch)=>{   


    try {

     
  

        let headers = {
            "Content-Type": "application/json",
            'Authorization': window.localStorage.getItem('token')
        }
        const respuesta = await axios.get(URL+`getUserInfo`,{
            headers: headers
        })
    
        dispatch({
            type: CONSULTAR_INFO,
            payload:respuesta.data.data,
        })
        

        if(respuesta.data.status==="Error"){
            dispatch({
        
                type: ERROR,
                payload: respuesta.data.message
                
            
            })

        }
        
    } catch (error) {
        
        if(error.message==="Request failed with status code 401"){
            window.localStorage.setItem('token','')
            window.localStorage.setItem('userData','')
        }else{
            dispatch({

                type: ERROR,
                payload: error.message
                
            
            })
        }
    }
}

export const getUserInfoAssistant = () => async(dispatch)=>{   


    try {

     
  

        let headers = {
            "Content-Type": "application/json",
            'Authorization': window.localStorage.getItem('token')
        }
        const respuesta = await axios.get(URL+`getAssistantInfo`,{
            headers: headers
        })
    
        dispatch({
            type: CONSULTAR_INFO_ASISTENTE,
            payload:respuesta.data.data,
        })
        

        if(respuesta.data.status==="Error"){
            dispatch({
        
                type: ERROR,
                payload: respuesta.data.message
                
            
            })

        }
        
    } catch (error) {
        
        if(error.message==="Request failed with status code 401"){
            window.localStorage.setItem('token','')
            window.localStorage.setItem('userData','')
        }else{
            dispatch({

                type: ERROR,
                payload: error.message
                
            
            })
        }
    }
}

export const accesRegister = (data) => async(dispatch)=>{   


    try {

     
  

        let headers = {
            "Content-Type": "application/json",
            'Authorization': window.localStorage.getItem('token')
        }
        const respuesta = await axios.get(URL+`accesRegister/${data}`,{
            headers: headers
        })
    
        window.sessionStorage.setItem('loginAccess',true)

        
        if(respuesta.data.status==="Error"){
            dispatch({
        
                type: ERROR,
                payload: respuesta.data.message
                
            
            })

        }
        
    } catch (error) {
        
        if(error.message==="Request failed with status code 401"){
            window.localStorage.setItem('token','')
            window.localStorage.setItem('userData','')
        }else{
            dispatch({

                type: ERROR,
                payload: error.message
                
            
            })
        }
    }
}



export const obtener_carusel = () => async(dispatch)=>{   


    try {

     
  

        let headers = {
            "Content-Type": "application/json",
            'Authorization': window.localStorage.getItem('token')
        }
        const respuesta = await axios.get(URL+`getCarruselsDiv`,{
            headers: headers
        })
    
        dispatch({
            type: CONSULTAR_DIV,
            payload:respuesta.data.data,
        })

        if(respuesta.data.status==="Error"){
            dispatch({
        
                type: ERROR,
                payload: respuesta.data.message
                
            
            })

        }
        
    } catch (error) {
        
        if(error.message==="Request failed with status code 401"){
            window.localStorage.setItem('token','')
            window.localStorage.setItem('userData','')
        }else{
            dispatch({

                type: ERROR,
                payload: error.message
                
            
            })
        }
    }
}

export const getInfoPlataform = () => async(dispatch)=>{   


    try {

        let headers = {
            "Content-Type": "application/json",
            'Authorization': window.localStorage.getItem('token')
        }
        const respuesta = await axios.get(URL+`getStadistics`,{
            headers: headers
        })
    
        dispatch({
            type: CONSULTAR_INFO_PLATAFORM,
            payload:respuesta.data.data,
        })

        if(respuesta.data.status==="Error"){
            dispatch({
        
                type: ERROR,
                payload: respuesta.data.message
                
            
            })

        }
        
    } catch (error) {
        
        if(error.message==="Request failed with status code 401"){
            window.localStorage.setItem('token','')
            window.localStorage.setItem('userData','')
        }else{
            dispatch({

                type: ERROR,
                payload: error.message
                
            
            })
        }
    }
}

export const descar_excel = (name) => async(dispatch)=>{   


    try {

     
  

        let headers = {
            "Content-Type": "application/json",
            'Authorization': window.localStorage.getItem('token')
        }
        const respuesta = await axios.get(URL+`getExcel/${name}`,{
            headers: headers,
            responseType: 'blob'
        })
    

        console.log('excel',respuesta.data)
        var blob = new Blob([respuesta.data], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
        FileSaver.saveAs(blob, name);


        if(respuesta.data.status==="Error"){
            dispatch({
        
                type: ERROR,
                payload: respuesta.data.message
                
            
            })

        }
        
    } catch (error) {
        
        if(error.message==="Request failed with status code 401"){
            window.localStorage.setItem('token','')
            window.localStorage.setItem('userData','')
        }else{
            dispatch({

                type: ERROR,
                payload: error.message
                
            
            })
        }
    }
}
  
export const logOut = () => (dispatch)=>{

    
    dispatch({
        type: CERRAR_SESION,
       
})
    window.localStorage.setItem('token','')
    window.localStorage.setItem('userData','')
}


export const comprobartoken = () => (dispatch,getState)=>{
    //const { Login } = getState().LoginReducer;
    if(!window.localStorage.getItem('token') ){

        dispatch({
            type: TOKENVERIFY,
           
    })

    }else{

       
        dispatch({
            type: GUARDAR,
           
    })
    }
   
  
}


export const agregar = (nueva_tarea) => async(dispatch)=>{
    
    dispatch({

        type: CARGANDO
        
    
    })

    try {
        let json = JSON.stringify(nueva_tarea)
        let params = json;

        const respuesta = await axios.post(URL+'login', params)
       

        if(respuesta.data.token.status === 'error'){
            window.localStorage.setItem('token','')
            dispatch({

                type: ERROR,
                payload: respuesta.data.token.message
         
            
            })

        }else{
            if(respuesta.data.status === 'success'){
  

                
                window.localStorage.setItem('token',respuesta.data.token)
                
                dispatch({
                    type: GUARDAR,
                    payload: true,
                   
                    })
                    
                
            }

        }
    

        
    } catch (error) {
        
            window.localStorage.setItem('token','')
         
    dispatch({

        type: ERROR,
        payload: 'Login Incorrecto'
        
    
    })

    dispatch({
        type: GUARDAR,
        payload: false,
       
        })
    }
}



export const limpiarForma  = () => async(dispatch,) => {
    dispatch({

        type: PERMISOS
        
    
    })

   
};



export const guardarimagen = (data,nameVar) => async (dispatch,getState) => {


    const {app_user_info} = getState().AppReducer

      try {


        let params = data
        let headers = {
            'Content-Type': 'multipart/from-data',
            'Authorization': window.localStorage.getItem('token')
        }
        const respuesta = await axios.post(URL + 'StoreImage', params, {
            headers: headers
        })
  
          const newinfo = {...app_user_info, [nameVar]: respuesta.data.imagename};

      
            dispatch({
              type: CONSULTAR_INFO,
              payload:newinfo
          })

       
      
    } catch (error) {


        if (error.message === "Request failed with status code 401") {
            window.localStorage.setItem('token', '')
            window.localStorage.setItem('userData', '')
        } else {
            dispatch({

                type: ERROR,
                payload: error.message


            })
        }
    }
}


export const guardarimagenPreview = (data,nameVar) => async (dispatch,getState) => {

 const {app_user_info} = getState().AppReducer

    dispatch({

        type: CARGANDO


    })

    try {


        let params = data
        let headers = {
            'Content-Type': 'multipart/from-data',
            'Authorization': window.localStorage.getItem('token')
        }
        const respuesta = await axios.post(URL + 'StoreImage', params, {
            headers: headers
        })

      
        const newinfo = {...app_user_info, [nameVar]: respuesta.data.imagename};

      
        dispatch({
          type: CONSULTAR_INFO,
          payload:newinfo
      })

    } catch (error) {


        if (error.message === "Request failed with status code 401") {
            window.localStorage.setItem('token', '')
            window.localStorage.setItem('userData', '')
        } else {
            dispatch({

                type: ERROR,
                payload: error.message


            })
        }
    }
}


export const updateInfo = (data) => async (dispatch) => {



    dispatch({

        type: CARGANDO


    })

    try {

        let json = JSON.stringify(data)
        let params = json;

        

        let headers = {
            "Content-Type": "application/json",
            'Authorization': window.localStorage.getItem('token')
        }


        const respuesta = await axios.post(URL + 'updateUserPlataform', params, {
            headers: headers
        })
       
        if (respuesta.data.status === "Success") {
           dispatch({

                type: SUCCESS,
                payload: respuesta.data.message


            })

       
      
      

            
        }else if(respuesta.data.status === "Error") {
            dispatch({

                type: ERROR,
                payload: respuesta.data.message


            })


        }






    } catch (error) {

        if (error.message === "Request failed with status code 401") {
            window.localStorage.setItem('token', '')
            window.localStorage.setItem('userData', '')
        } else {
            dispatch({

                type: ERROR,
                payload: error.message


            })
        }
    }
}


export const updateForm = (data,nameVar) => async (dispatch,getState) => {

    const {app_user_info} = getState().AppReducer
   
       dispatch({
   
           type: CARGANDO
   
   
       })
   
       try {
     
         
           const newinfo = {...app_user_info, [nameVar]: data};
   
         
           dispatch({
             type: CONSULTAR_INFO,
             payload:newinfo
         })
   
       } catch (error) {
   
   
           if (error.message === "Request failed with status code 401") {
               window.localStorage.setItem('token', '')
               window.localStorage.setItem('userData', '')
           } else {
               dispatch({
   
                   type: ERROR,
                   payload: error.message
   
   
               })
           }
       }
   }