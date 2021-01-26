import {
  CARGANDO,
  ERROR,
  CAMBIO_USUARIO_ID,
  CAMBIO_TITULO,
  GUARDAR,
  TRAER_TODAS,
  TOKENVERIFY,
  CERRAR_SESION,
  PERMISOS,
  CONSULTAR_DIV,
  CONSULTAR_INFO,
  SUCCESS,
  CONSULTAR_INFO_PLATAFORM,
  CONSULTAR_INFO_ASISTENTE,
} from "../Types/AppTypes";
const INITIAL_STATE = {
  login: [],
  app_carrusel: [],
  app_user_info: [],
  app_plataform_info: [],
  app_user_assistant_info: [],
  permisos: "",
  perfil: "",
  cargando: false,
  error: "",
  usuario_id: "",
  isAuth: false,
  success: "",
  regresar: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODAS:
      return {
        ...state,
        usuario_id: "",
        password: "",
      };

    case CARGANDO:
      return { ...state, cargando: true };

    case ERROR:
      return { ...state, error: action.payload, cargando: false };

    case CAMBIO_USUARIO_ID:
      return {
        ...state,
        usuario_id: action.payload,
      };

    case SUCCESS:
      return { ...state, success: action.payload, cargando: false, error: "" };

    case CONSULTAR_DIV:
      return {
        ...state,
        app_carrusel: action.payload,
      };
    case CONSULTAR_INFO:
      return {
        ...state,
        app_user_info: action.payload,
        cargando: false,
        success: "",
        error: "",
      };

    case CONSULTAR_INFO_PLATAFORM:
      return {
        ...state,
        app_plataform_info: action.payload,
        cargando: false,
        success: "",
        error: "",
      };

    case CONSULTAR_INFO_ASISTENTE:
      return {
        ...state,
        app_user_assistant_info: action.payload,
        cargando: false,
        success: "",
        error: "",
      };
    case CAMBIO_TITULO:
      return {
        ...state,
        password: action.payload,
      };

    case GUARDAR:
      return {
        ...state,
        login: action.payload,
        cargando: false,
        error: "",
        isAuth: action.payload,
      };

    case PERMISOS:
      return { ...state, success: "", cargando: false, error: "" };

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
        isAuth: false,
      };

    default:
      return state;
  }
};
