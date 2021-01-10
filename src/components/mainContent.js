import React from "react"
import mainContentStyle from "../styles/mainContent.module.scss"

const MainContent = (props) => (
  <div className={mainContentStyle.div}>
      <h1 className={mainContentStyle.h1}>{props.mainContentHeader}</h1>
      <p className={mainContentStyle.p}>{props.mainContentP}</p>
      <img src={props.imgName}/>
  </div>
)


export default MainContent