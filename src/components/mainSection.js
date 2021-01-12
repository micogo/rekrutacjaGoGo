import PropTypes from "prop-types"
import React from "react"
import mainSectionStyle from "../styles/mainSection.module.scss"
import MainContent from "../components/mainContent"
import wordpress from '../images/logo-wordpress.svg'

const MainSection = () => (
    <>
    <div className={mainSectionStyle.container}>
    <h1 className={mainSectionStyle.h1}>Heading</h1>
      <div className={mainSectionStyle.divText}>Lorem ipsum dolor sit amet, consect etur adipiscing elit.</div>
      <h2 className={mainSectionStyle.h2}>Heading</h2>
      <div className={mainSectionStyle.mainContent}>
        <MainContent mainContentHeader="Heading" mainContentP="Lorem ipsum dolor sit amet." imgName={wordpress}></MainContent>
        <MainContent mainContentHeader="Heading" mainContentP="Lorem ipsum dolor sit amet, consect
      etur adipiscing elit. Aenea uismod bibendum laoreet. Lorem ipsum dolor sit amet"></MainContent>
        <MainContent mainContentHeader="Ultra Mega Super Long Heading" mainContentP="Lorem ipsum dolor sit amet."></MainContent>
      </div>
    </div>
    </>
)

export default MainSection