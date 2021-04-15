
let URL_DEV

if(process.env.NODE_ENV==='development'){
    URL_DEV='https://immense-savannah-13520.herokuapp.com/'
}else{
    URL_DEV='https://immense-savannah-13520.herokuapp.com/'
}
export const URL=URL_DEV
export const URLHomePage=URL_DEV