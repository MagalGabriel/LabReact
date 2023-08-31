import React from 'react'
import './Footer.css'
import animation from '../assets/gifs/CrimsonRose-rotation.gif'

const Footer = () => {
  return (
    <footer>
        <p>Todos os direitos reservados - 2023 .</p>  
        <p>. Desenvolvido por Gabriel Magalhães</p>

        <img src={animation} className='animation' alt="Rosa carmesim rodando" />
    </footer>
  )
}

export default Footer