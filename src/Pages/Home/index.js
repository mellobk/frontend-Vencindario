import React, { Component } from "react";
import * as AppAction from "../../Actions/AppAction";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import FormCard from "../../Components/Form";
import PostCard from "../../Components/PostCard";
import Modals from "../../Components/Modal";
import Loading from "../../Components/Loading";



class Home extends Component {
  state = { show: false, 
    per: 10, 
    scrolling: false };

  showModal = () => {
    this.setState({ show: true });
  };

  sendInfoModal = (video, text) => {
    this.setState({ video: video, textModal: text });
  };

  renderPosts = () =>
    this.props.posts.slice(0,this.props.elementosScoll).map((posts, key) => (
      <PostCard
        postsData={this.props.posts}
        postsInfo={posts}
        likes={this.props.likes}
        key={key}
        likeDislike={this.props.handelLikeDislike}
        showPostComentario={this.showPostComentario}
        crearNuevocomentario={this.props.crearNuevocomentario}
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
    const { getAllInformation } = this.props;
    getAllInformation()
    window.addEventListener('scroll',this.handleScroll)

 
  }
  handleScroll =()=> {
        const {scrolling} = this.state
    if(scrolling) return
    //if(totalLength <= )
    
    const divscroll = document.getElementById('scroll')
    const divScrollOffSet = divscroll.offsetTop + divscroll.clientHeight
    const pageOffSet = window.pageYOffset + window.innerHeight
    let bottomOffSet = 20
    
if(pageOffSet>divScrollOffSet - bottomOffSet) this.props.elementScroll(this.props.elementosScoll+10)
  
  }


  componentDidUpdate() {
    const { getAllInformation, post_reload } = this.props;
    if (post_reload) {
      getAllInformation();
    }
  }

  componentWillUnmount() {

    window.removeEventListener('scroll',this.handleScroll,false)
  }

  render() {
    
    const { error, cargando, success } = this.props

    return (
      <div className="main-content fade-in ">

        
<div className="action_div">{<Loading error={error} cargando={cargando} success={success}/>}</div>
        {this.renderPosts()}

        <Modals
          post_modal={this.props.post_modal}
          showPostModal={this.showPostModal}
          FormCard={
            <FormCard
              buttonName="Publicar"
              newContent={this.props.crearNuevoPost}
            />
          }
        />

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
export default connect(mapStateToProps, AppAction)(Home);
