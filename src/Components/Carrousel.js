import React, { /* Fragment */ } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { URL } from '../Global/url'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


/*   const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  }; */

export const HeaderApp = (props) => {

  const modalClickEvent = (e,video,text) =>{
 e.preventDefault()
 props.showModal()
 props.sendInfoModal(video,text)
  }

  const modalClickEventNone = (e) =>{
    e.preventDefault()

     }
  return (
    <div  style={window.innerWidth>600 ?{width:'70%',margin:'0 auto'}:{width:'100%',margin:'0 auto'}}>

<h2 style={{ textAlign: "center", fontSize: "1.5rem",marginTop:'10px' }}>
        {props.titleText}
      </h2>
      
      <Carousel        
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >

{/* carrusel_plataform_id: 1
created_at: null
id: 1
modal: 1
modal_text: "qweqwqwqdqdqwqeqweqwdqwqwewqdqweqwewqeqweqeqweqwewqqweqweqweqeqewqeqeqeqeweqweqweqweqqew"
modal_video: "dIwOmgaO7Ck"
picture_item_carrusel: "https://www.youtube.com/watch?v=dIwOmgaO7Ck&ab_&ab_"
updated_at: null */}
{console.log('items del div',props.items)}
        {   
        props.items?
        props.items.map((itemCarrusel, key) => (

          <div key={key}   onClick={itemCarrusel.modal?(e)=>modalClickEvent(e,itemCarrusel.modal_video,itemCarrusel.modal_text):(e)=>modalClickEventNone} style={{ height: "100%", display: "flex", alignItems: "center" }}>
          <img
            src={`${URL}getImageOriginal/${itemCarrusel.picture_item_carrusel}`}
            alt="img de prueba"
            style={{ width: "95%", margin: "0 auto" }}
          />
        </div>
          
  
        )):""    
      }
  
  {/*       <div>
          <iframe
            width="100%"
            title="video"
            height="315"
            src="https://www.youtube.com/embed/l5nnc7iWDRM"
            contols="2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div> */}
 
      </Carousel>
      
 
    </div>
  );
};

export default HeaderApp;
