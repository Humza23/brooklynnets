import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { images_carousel } from "../carousel_images";

const HomeCarousel = () => {
  return (
    <div className="carousel">
      <Carousel
        transitionTime={750}
        autoPlay={true}
        infiniteLoop={true}
        interval={2500}
        showArrows
        >
        {images_carousel.map((picture, idx) => {
            return (
              <img className="teamImages"
                src={picture.image}
                alt="pictures"
                key={idx+1}
                />
          );
        })}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
