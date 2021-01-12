import PropTypes from "prop-types"
import React from "react"
import slideStyle from "../styles/slide.module.scss"

const Slide = (props) => (
  <div className={slideStyle.slide}>
      <h3 className={slideStyle.h3}>{props.slideHeader}</h3>
      <p className={slideStyle.p}>{props.slideP}</p>
      <img src={props.imgName}/>
  </div>
)


export default Slide