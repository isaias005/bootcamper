import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

const Brand = () => {
  return (
    <div className="brand">
      <Link to="/">
        <img className="brand__logo" src={logo} alt="Bootcamper logo" /> <span className="brand__text">Bootcamper</span>
      </Link>
    </div>
  )
}

export default Brand;