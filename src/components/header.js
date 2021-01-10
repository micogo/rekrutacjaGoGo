import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerstyles from "../styles/header.module.scss"
import logo from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <header>
    <img src={logo} className={headerstyles.logo}></img>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
