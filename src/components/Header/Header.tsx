import React from 'react'

import HeaderSearch from './HeaderSearch'
import HeaderNav from './HeaderNav'

import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <Link to="/">
        <img className="headerLogo" src={require('../../assets/img/logo_amazon.png')} alt="logo_amazon" />
      </Link>


      <HeaderSearch />

      <HeaderNav />
    </div>
  )
}

export default Header
