import {
  CARGANDO,
  ERROR,
  lOGIN,
  TOKENVERIFY,
  CERRAR_SESION,
  SUCCESS,
  POST_MODAL,
  CONSULTAR_ALL_INFO_LIKES,
  CONSULTAR_ALL_INFO_POSTS,
  CREAR_NUEVO_POST,
  CREAR_NUEVO_COMENTARIO_ID,
  COMENTARY_MODAL,
  CONSULTAR_POST_POSTID,
  CANTIDAD_ELEMENTOS_SCROLL,
  CONSULTAR_COMENTARIOS_POST} from "../Types/AppTypes";
const INITIAL_STATE = {
  login: [],
  likes: [],
  posts: [],
  postsId: [],
  post_modal: false,
  comentarys:[],
  comentary_modal: false,
  post_reload: false,
  idPost:"",
  cargando: false,
  error: "",
  usuario_id: "",
  isAuth: false,
  success: "",
  regresar: false,
  elementosScoll:10
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case lOGIN:
      return {
        ...state,
        cargando: false,
        error: "",
        isAuth: action.payload,
      };

    case POST_MODAL:
      return {
        ...state,
        post_modal: action.payload,
      };
      
    case COMENTARY_MODAL:
      return {
        ...state,
        comentary_modal: action.payload,
      };

    case CREAR_NUEVO_COMENTARIO_ID:
      return {
        ...state,
        idPost: action.payload,
      }; 

    case CREAR_NUEVO_POST:
      return {
        ...state,
        post_reload: action.payload,
      };

    case CONSULTAR_ALL_INFO_POSTS:
      return {
        ...state,
        cargando: false,
        error: "",
        posts: action.payload,
        post_reload: false,
      };

    case CONSULTAR_ALL_INFO_LIKES:
      return {
        ...state,
        cargando: false,
        error: "",
        likes: action.payload,
      };

      case CANTIDAD_ELEMENTOS_SCROLL:
        return {
          ...state,
          cargando: false,
          error: "",
          elementosScoll: action.payload,
        };
      
      
      case CONSULTAR_POST_POSTID:
        return {
          ...state,
          cargando: false,
          error: "",
          postsId: action.payload,
        };
  
      

      case CONSULTAR_COMENTARIOS_POST:
        return {
          ...state,
          cargando: false,
          error: "",
          comentarys: action.payload,
        };

    case CERRAR_SESION:
      return {
        ...state,
        isAuth: false,
      };

    case TOKENVERIFY:
      return {
        ...state,
        cargando: false,
        error: "",
        isAuth: action.payload,
      };

    case CARGANDO:
      return { ...state, cargando: true };

    case ERROR:
      return { ...state, error: action.payload, cargando: false };

    case SUCCESS:
      return { ...state, success: action.payload, cargando: false, error: "" };

    default:
      return state;
  }
};
