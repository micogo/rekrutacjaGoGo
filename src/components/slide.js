import PropTypes from "prop-types"
import React from "react"
import slideStyle from "../styles/slide.module.scss"

const Slide = (props) => (
  <div className={slideStyle.slide}>
      <h1 className={slideStyle.h1}>{props.slideHeader}</h1>
      <p className={slideStyle.p}>{props.slideP}</p>
      <img src={props.imgName}/>
  </div>
)


export default Slide