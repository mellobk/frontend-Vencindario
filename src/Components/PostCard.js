
import React, { /* Fragment */ } from "react";
import { Fragment } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BiCommentDetail,BiCommentAdd } from "react-icons/bi";
import { Link } from "react-router-dom";

export const PostCard = (props) => {


    const findUserLike = props.likes.find(data => data.postp_id === props.postsInfo.id && data.user_id ===parseInt(window.localStorage.getItem("id_user"), 10) );

    return (

      
        <Fragment>

            
        <div style={{ margin: '0 auto', position: 'relative', display: 'grid', width: '90%',borderBottom: 'solid', marginTop: '5px',wordBreak:'break-all'}}  key={props.keyItem}>

           
        <Link style={{textDecoration:'none'}} to={`/Post/${props.postsInfo.id}`}>
        <h2>{props.postsInfo.nombre}</h2>
        </Link> 

            <span style={{ textAlign: 'justify' }}>{props.postsInfo.contenido}</span>
            <span style={{ textAlign: 'right' }}>{props.postsInfo.email}</span>
            <span style={{ textAlign: 'right' }}>{new Date(props.postsInfo.created_at).toLocaleString("en-US", {timeZone: "America/New_York"})}</span>
            <span onClick={e=>{props.showPostComentario(true,props.postsInfo.id)}} style={{ cursor: 'pointer',textAlign: 'right'}}>  <BiCommentAdd /> Agregar Comentario</span>

            <div style={{ textAlign: 'right' }}>  <span style={{ cursor: 'pointer' }}>  <BiCommentDetail /> {props.postsInfo.numero_comentarios}</span>                          
            <span><AiFillLike style={{ color: findUserLike?findUserLike.status === 1 ? 'green' : "":"", cursor: 'pointer' }} 
            onClick={e=>{props.likeDislike(findUserLike,1,props.postsInfo,props.postsData)}}/> {props.postsInfo.numero_likes} </span>
                <span><AiFillDislike style={{ color: findUserLike?findUserLike.status === 2 ? 'red' : "":"", cursor: 'pointer' }} 
                onClick={e=>{props.likeDislike(findUserLike,2,props.postsInfo,props.postsData)}}/>{props.postsInfo.numero_dislikes}</span> </div>

                     
        </div>

               



</Fragment>





    )
}

export default PostCard;