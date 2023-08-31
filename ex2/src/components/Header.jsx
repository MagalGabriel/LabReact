import React from 'react'
import logo from '../assets/gifs/Yamato.gif'
import './Header.css'
const Header = () => {
  return (
    <header>
        <img src={logo} className='logo' alt="logo Fatec cinza e vermelho" />
        <h1>Exercício 2 - React</h1>
    </header>
  )
}

export default Header