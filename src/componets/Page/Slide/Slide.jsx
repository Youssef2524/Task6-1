
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import img1 from "./download (1).jpg"
import img3 from "./download (2).jpg"
import img2 from "./download.jpg"
import "./Slide.css"
const Slide = () => {



  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (


    <div className="parent-slider">
      <div className='slider'>

        <Slider {...settings}>
          <div className='child-slider1'>
            <img src={img1} alt="" />

          </div>
          <div className='child-slider2'>
            <img src={img2} alt="" />
          </div>
          <div className='child-slider3'>
            <img src={img3} alt="" />
          </div>


        </Slider>
      </div>
    </div>
  );


}




export default Slide