import React from "react"
import mainContentStyle from "../styles/mainContent.module.scss"

const MainContent = (props) => (
  <div className={mainContentStyle.div}>
      <h3 className={mainContentStyle.h3}>{props.mainContentHeader}</h3>
      <p className={mainContentStyle.p}>{props.mainContentP}</p>
      <img src={props.imgName}/>
  </div>
)


export default MainContent