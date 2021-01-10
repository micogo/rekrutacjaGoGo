import React, { Component }  from 'react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import sliderStyles from "../styles/sliderContainer.module.scss"
import Slide from "../components/slide"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import wordpress from '../images/logo-wordpress.svg'

const settings = {
  dots: false,
  infinite: true,
  autoplay: false,
  arrows: true,
  className: 'sliderInnerDiv',
  pauseOnFocus: true,
  pauseOnHover: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint:1200,
      settings:{
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
        centerMode: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        centerPadding: '25%',
        centerMode: true,
        arrows: false
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: false,
        centerPadding: '10%',
        arrows: false
      }
    },
  {
    breakpoint: 350,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 0,
        centerMode: true,
        autoplay: false,
        centerPadding: '0%',
        arrows: false
      }
    }
  ],
  // centerMode: true,
}

const CarouselPage = () => {
  return (
    <Slider {...settings}>
      <div>
        <Slide slideHeader="Heading" slideP="Lorem ipsum dolor sit amet." imgName={wordpress}></Slide>
      </div>
      <div>
      <Slide slideHeader="Heading" slideP="Lorem ipsum dolor sit amet, consect
      etur adipiscing elit. Aenea uismod bibendum laoreet. Lorem ipsum dolor sit amet">
      </Slide>
      </div>
      <div>
      <Slide slideHeader="Ultra Mega Super Long Heading" slideP="Lorem ipsum dolor sit amet."></Slide>
      </div>
      <div>
      <Slide slideHeader="Ultra Mega Super Long Heading" slideP="Lorem ipsum dolor sit amet."></Slide>
      </div>
      <div>
      <Slide slideHeader="Heading" slideP="Lorem ipsum dolor sit amet, consect
      etur adipiscing elit. Aenea uismod bibendum laoreet. Lorem ipsum dolor sit amet">
      </Slide>
      </div>
      <div>
      <Slide slideHeader="Heading" slideP="Lorem ipsum dolor sit amet."></Slide>
        <FontAwesomeIcon icon={['fab', 'apple']} />
      </div>
    </Slider>
  )
}

export default CarouselPage