import axios from "axios";
import {
  CARGANDO,
  ERROR,
  lOGIN,
  TOKENVERIFY,
  COMENTARY_MODAL,
  CONSULTAR_ALL_INFO_LIKES,
  CONSULTAR_ALL_INFO_POSTS,
  CREAR_NUEVO_POST,
  POST_MODAL,
  CREAR_NUEVO_COMENTARIO_ID,
  CONSULTAR_COMENTARIOS_POST,
  CONSULTAR_POST_POSTID,
  CANTIDAD_ELEMENTOS_SCROLL
} from "../Types/AppTypes";
import { URL } from "../../src/Global/url";



export const login = (data) => async (dispatch) => {
  dispatch({
    type: CARGANDO,
  });

  try {
    let params = data;

    const respuesta = await axios.post(URL + "user", params);

    if (respuesta.data.status === "Success") {
      window.localStorage.setItem("email", respuesta.data.data.email);
      window.localStorage.setItem("id_user", respuesta.data.data.id);
      dispatch({
        type: lOGIN,
        payload: true,
      });
    } else {
      window.localStorage.setItem("email", "");
      window.localStorage.setItem("id_user", "");
      dispatch({
        type: ERROR,
        payload: respuesta.data.token.message,
      });
    }
  } catch (error) {
    window.localStorage.setItem("email", "");
    window.localStorage.setItem("id_user", "");

    dispatch({
      type: ERROR,
      payload: "Login Incorrecto",
    });

    dispatch({
      type: lOGIN,
      payload: false,
    });
  }
};

export const logOut = () => async (dispatch) => {

  
    window.localStorage.setItem("email", "");
    window.localStorage.setItem("id_user", "");

    dispatch({
        type: lOGIN,
        payload: false,
      });
 
  };

export const comprobartoken = () => (dispatch) => {
  console.log("token", window.localStorage.getItem("user_id"));
  if (window.localStorage.getItem("id_user")) {
    console.log("entro a true en comprobar token");
    dispatch({
      type: TOKENVERIFY,
      payload: true,
    });
  } else {
    console.log("entro a false en comprobar token");
    dispatch({
      type: TOKENVERIFY,
      payload: false,
    });
  }
};

export const getAllInformation = () => async (dispatch) => {
  dispatch({
    type: CARGANDO,
    payload: false,
  });



  try {
    const respuesta = await axios.get(URL + `getallposts/${ window.localStorage.getItem("id_user")}`);

  
    if (respuesta.data.status === "Success") {
      dispatch({
        type: CONSULTAR_ALL_INFO_LIKES,
        payload: respuesta.data.likes,
      });
  
      dispatch({
        type: CONSULTAR_ALL_INFO_POSTS,
        payload: respuesta.data.data,
      });
  
    }

    if (respuesta.data.status === "Error") {
      dispatch({
        type: ERROR,
        payload: respuesta.data.message,
      });
    }
  } catch (error) {
    if (error.message === "Request failed with status code 401") {
      window.localStorage.setItem("id_user", "");
    } else {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  }
};


export const getPostComentary = (postId) => async (dispatch) => {
  dispatch({
    type: CARGANDO,
    payload: false,
  });



  try {
    const respuesta = await axios.get(URL + `postComentarys/${postId}`);

  
    if (respuesta.data.status === "Success") {
      dispatch({
        type: CONSULTAR_COMENTARIOS_POST,
        payload: respuesta.data.comentarios,
      });
  
      dispatch({
        type: CONSULTAR_POST_POSTID,
        payload: respuesta.data.data,
      });
  
    }

    if (respuesta.data.status === "Error") {
      dispatch({
        type: ERROR,
        payload: respuesta.data.message,
      });
    }
  } catch (error) {
    if (error.message === "Request failed with status code 401") {
      window.localStorage.setItem("id_user", "");
    } else {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  }
};

export const handelLikeDislike = (data, likeDislikeParam, postInfo) => async (
  dispatch,
  getState
) => {
  let statusValue;
  let likeValue;
  let dislikeValue;
  let parametroValue;
  const { likes, posts,postsId } = getState().AppReducer;

  if (data) {
    if (data.status === 1 && likeDislikeParam === 1) {
      statusValue = 0;
      likeValue = -1;
      dislikeValue = 0;
      parametroValue = "like";
    } else if (data.status === 0 && likeDislikeParam === 1) {
      statusValue = 1;
      likeValue = 1;
      dislikeValue = 0;
      parametroValue = "like";
    } else if (data.status === 0 && likeDislikeParam === 2) {
      statusValue = 2;
      likeValue = 0;
      dislikeValue = 1;
      parametroValue = "dislike";
    } else if (data.status === 1 && likeDislikeParam === 2) {
      statusValue = 2;
      likeValue = -1;
      dislikeValue = 1;
      parametroValue = "likedislike";
    } else if (data.status === 2 && likeDislikeParam === 1) {
      statusValue = 1;
      likeValue = 1;
      dislikeValue = -1;
      parametroValue = "likedislike";
    } else if (data.status === 2 && likeDislikeParam === 2) {
      statusValue = 0;
      likeValue = 0;
      dislikeValue = -1;
      parametroValue = "dislike";
    }

    const newData = likes.map((item, i) => {
      if (item.id === data.id) {
        return { ...item, status: statusValue };
      }
      return item;
    });

    dispatch({
      type: CONSULTAR_ALL_INFO_LIKES,
      payload: newData,
    });

    const newPostData = posts.map((item, i) => {
      if (item.id === postInfo.id) {
        return {
          ...item,
          numero_likes: postInfo.numero_likes + likeValue,
          numero_dislikes: postInfo.numero_dislikes + dislikeValue,
        };
      }
      return item;
    });

    dispatch({
      type: CONSULTAR_ALL_INFO_POSTS,
      payload: newPostData,
    });

if(postsId){
  const newPostId = postsId.map((item, i) => {
    let itemPostId= {
      ...item,
      numero_likes: postInfo.numero_likes + likeValue,
      numero_dislikes: postInfo.numero_dislikes + dislikeValue,
    };
    return itemPostId;
  });
  
  dispatch({
    type: CONSULTAR_POST_POSTID,
    payload: newPostId,
  });
}
  

    let dataUserLikeDislike = {
      status: statusValue,
      user_id: window.localStorage.getItem("id_user"),
      postp_id: postInfo.id,
      parametro: parametroValue,
      like: likeValue,
      dislike: dislikeValue,
    };

    try {
      await axios.post(
        URL + `userlikepost`,
        dataUserLikeDislike
      );


    } catch (error) {
      if (error) {
        window.localStorage.setItem("id_user", "");
      } else {
        dispatch({
          type: ERROR,
          payload: error.message,
        });
      }
    }
  } else {
    data = {
      postp_id: postInfo.id,
      status: likeDislikeParam,
      user_id: parseInt(window.localStorage.getItem("id_user"), 10),
    };

    const respuesta = await axios.post(URL + `userlikepost`, data);

    if (respuesta.data.status === "Success") {
      const newLike = likes.concat(respuesta.data.data);

      const newPostData = posts.map((item, i) => {
        if (item.id === postInfo.id) {
          if (likeDislikeParam === 1) {
            return { ...item, numero_likes: postInfo.numero_likes + 1 };
          } else {
            return { ...item, numero_dislikes: postInfo.numero_dislikes + 1 };
          }
        }
        return item;
      });


      if(postsId){

        console.log('data parta un post',postsId)
        const newPostIdData = postsId.map((item, i) => {
          
            if (likeDislikeParam === 1) {
              return { ...item, 'numero_likes': postsId[0].numero_likes + 1 };
            } else {
              return { ...item, 'numero_dislikes': postsId[0].numero_dislikes + 1 };
            }
          
      
        });

        dispatch({
          type: CONSULTAR_POST_POSTID,
          payload: newPostIdData,
        });

      }

      dispatch({
        type: CONSULTAR_ALL_INFO_POSTS,
        payload: newPostData,
      });

      dispatch({
        type: CONSULTAR_ALL_INFO_LIKES,
        payload: newLike,
      });
    }
  }
};

export const showPostModal = (data) => (dispatch) => {
  dispatch({
    type: POST_MODAL,
    payload: data,
  });
};

export const showComentaryModal = (data) => (dispatch) => {
    dispatch({
      type: COMENTARY_MODAL,
      payload: data,
    });
  };

  export const postIdComentario = (data) => (dispatch) => {

    dispatch({
      type: CREAR_NUEVO_COMENTARIO_ID,
      payload: data,
    });
  };


export const crearNuevoPost = (nombre, contenido) => async (dispatch) => {
  const data = {
    nombre: nombre,
    contenido: contenido,
    numero_likes: 0,
    numero_dislikes: 0,
    numero_comentarios: 0,
    user_id: window.localStorage.getItem("id_user"),
  };
  try {
    const respuesta = await axios.post(URL + `postp`, data);

    if (respuesta.data.status === "Success") {
      dispatch({
        type: CREAR_NUEVO_POST,
        payload: true,
      });

      dispatch({
        type: POST_MODAL,
        payload: false,
      });
    }

    if (respuesta.data.status === "Error") {
      dispatch({
        type: ERROR,
        payload: respuesta.data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const crearNuevocomentario = (nombre, contenido) => async (dispatch,getState) => {

    const { idPost,posts } = getState().AppReducer;


    const data = {
      nombre: nombre,
      contenido: contenido,
      postp_id:idPost,
      user_id: parseInt(window.localStorage.getItem("id_user"), 10),
    };

    console.log(data)
     try {
      const respuesta = await axios.post(URL + `comentario`, data);
  
      if (respuesta.data.status === "Success") {

  
        const newPostData = posts.map((item, i) => {
            if (item.id === idPost) {
              return {
                ...item,
                'numero_comentarios': item.numero_comentarios + 1,
               
              };
            }
            return item;
          });

          dispatch({
        type: CONSULTAR_COMENTARIOS_POST,
        payload: respuesta.data.comentarios,
      });


      dispatch({
        type: CONSULTAR_ALL_INFO_POSTS,
        payload: newPostData,
      });
  

            dispatch({
            type: CONSULTAR_POST_POSTID,
            payload: respuesta.data.data,
          });
          
        dispatch({
          type: COMENTARY_MODAL,
          payload: false,
        });
      }
  
      if (respuesta.data.status === "Error") {
        dispatch({
          type: ERROR,
          payload: respuesta.data.message,
        });
      }
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.message,
      });
    }
  };
  

  export const elementScroll = (data) => (dispatch)=>{

    dispatch({
        type: CANTIDAD_ELEMENTOS_SCROLL,
        payload: data
        
    })


}