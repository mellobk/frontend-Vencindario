
let URL_DEV

if(process.env.NODE_ENV==='development'){
    URL_DEV='//localhost/API-valesExp/public/'
}else{
    URL_DEV='https://xtremestudio.com.co/API-ppV/'
}
export const URL=URL_DEV
export const URLHomePage=URL_DEV