import React from 'react'
import BeidouImg from "../assets/images/Beidou02.jpg"
import './pagesCSS/Pagina2.css'

const Pagina2 = () => {
  return (
    <main>
        <section>
            <h2>Página 2</h2>
            <p>Esta é a página dois</p>
            <img src={BeidouImg} className='beidouimg' alt='Personagem Beidou de Genshin Impact, segurando uma máscara kitsune perto do rosto' />
        </section>
    </main>
  )
}

export default Pagina2