import React, { /* Fragment */ } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imgFondo from "../Img/imgStandar.png";

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
  return (
    <div style={{ width: "100%" }}>
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
        <div onClick={props.showModal} style={{ height: "100%", display: "flex", alignItems: "center" }}>
          <img
            src={imgFondo}
            alt="img de prueba"
            style={{ width: "95%", margin: "0 auto" }}
          />
        </div>
        <div>
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
        </div>
        <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
          <img
            src={imgFondo}
            alt="img de prueba"
            style={{ width: "95%", margin: "0 auto" }}
          />
        </div>
        <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
          <img
            src={imgFondo}
            alt="img de prueba"
            style={{ width: "95%", margin: "0 auto" }}
          />
        </div>
      </Carousel>
      ;
      <h2 style={{ textAlign: "center", fontSize: "1.5rem" }}>
        {props.titleText}
      </h2>
    </div>
  );
};

export default HeaderApp;
