
let URL_DEV

if(process.env.NODE_ENV==='development'){
    URL_DEV='http://localhost/API-Studiotopmedellin/public/'
}else{
    URL_DEV='https://xtremestudio.com.co/API/'
}
export const CORREO_STUDIO='@adminwebcam.com.co'
export const URL=URL_DEV