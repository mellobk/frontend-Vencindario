
let URL_DEV

if(process.env.NODE_ENV==='development'){
    URL_DEV='https://api.valesexperiencias.com/'
}else{
    URL_DEV='https://api.valesexperiencias.com/'
}
export const URL=URL_DEV
export const URLHomePage=URL_DEV