import PropTypes from "prop-types"
import React from "react"
import CarouselPage from '../components/slider';
import sliderStyles from '../styles/sliderContainer.module.scss'

const SliderContainer = ({title}) => (
  <>
    <div className={sliderStyles.container}>
      <h1 className={sliderStyles.h1}>Heading</h1>
      <div className={sliderStyles.divText}>Lorem ipsum dolor sit amet, consect etur adipiscing elit.</div>
      <div className={sliderStyles.carouselPage}>
        <CarouselPage></CarouselPage>
      </div>
      <div className={sliderStyles.dotRed}></div>
    </div>
  </>
)

export default SliderContainer
