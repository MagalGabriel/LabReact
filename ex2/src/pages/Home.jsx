import React from 'react'
import imgFundo from '../assets/images/Ryuko-Minimal.jpg'

const Home = () => {
  return (
    <main>
        <section>
            <h2>Home</h2>
            <p>Esta é a página inicial</p>
        </section>
        <img src={imgFundo} alt='Imagem com detalhes mínimos de Ryuko de Kill la Kill' />
        
    </main>
  )
}

export default Home