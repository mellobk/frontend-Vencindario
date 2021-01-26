
let URL_DEV

if(process.env.NODE_ENV==='development'){
    URL_DEV='//localhost/API-valesExp/public/'
}else{
    URL_DEV='https://api.valesexperiencias.com/'
}
export const URL=URL_DEV
export const URLHomePage=URL_DEV