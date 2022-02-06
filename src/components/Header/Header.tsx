import React from 'react'

import HeaderSearch from './HeaderSearch'
import HeaderNav from './HeaderNav'

function Header() {
  return (
    <div className='header'>
      <img className="headerLogo" src={require('../../assets/img/logo_amazon.png')} alt="logo_amazon" />

      <HeaderSearch />

      <HeaderNav />
    </div>
  )
}

export default Header
