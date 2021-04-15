import React, { Component } from "react";
import * as AppAction from "../../Actions/AppAction";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import FormCard from "../../Components/Form";
import PostCard from "../../Components/PostCard";
import ComentarysCArd from "../../Components/ComentaryCard";
import Modals from "../../Components/Modal";
import Loading from "../../Components/Loading";
import styled from "styled-components";

const BackButton = styled.button`
      float: right;
    margin: 5px;
    border-radius: 5px;
    background: #28b0ee;
    color: white;
    &:hover {
    color: black;
  }
`;

class PostComentary extends Component {
  state = { show: false, video: "", textModal: "" };

  showModal = () => {
    this.setState({ show: true });
  };

  sendInfoModal = (video, text) => {
    this.setState({ video: video, textModal: text });
  };

  renderPosts = () =>
    this.props.postsId.map((posts, key) => (
      <PostCard
       
        postsInfo={posts}
        likes={this.props.likes}
        key={key}
        likeDislike={this.props.handelLikeDislike}
        showPostComentario={this.showPostComentario}
        crearNuevocomentario={this.props.crearNuevocomentario}
      />
    ));


    renderComentarys = () =>
    this.props.comentarys.map((comentary, key) => (
      <ComentarysCArd
      key={key}
      comentaryInfo={comentary}
      />
    ));


  showPostModal = (data) => {
    this.props.showPostModal(data);
  };

  showPostComentario = (data, id) => {
    this.props.showComentaryModal(data);
    this.props.postIdComentario(id);
  };

  async componentDidMount() {

    
    const { getPostComentary,match: {
      params: { Post_id },
  }, } = this.props;

    getPostComentary(Post_id);
  }

  componentDidUpdate() {
  }

  componentWillUnmount() {}

  render() {
    
    const { error, cargando, success } = this.props

    return (
      <div className="main-content fade-in ">
                <BackButton  onClick={() =>this.props.history.goBack()}> volver</BackButton>
        
<div className="action_div">{<Loading error={error} cargando={cargando} success={success}/>}</div>
        {this.renderPosts()}
        {this.renderComentarys()} 

        <Modals
          post_modal={this.props.comentary_modal}
          showPostModal={this.showPostComentario}
          FormCard={
            <FormCard
              buttonName="Publicar comentario"
              newContent={this.props.crearNuevocomentario}
            />
          }
        />
<div id='scroll'> </div>
      </div>
    );
  }
}

const mapStateToProps = ({ AppReducer }) => AppReducer;
export default connect(mapStateToProps, AppAction)(PostComentary);
