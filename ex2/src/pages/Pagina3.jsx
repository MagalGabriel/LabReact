import React from 'react'
import Nobaraimg from '../assets/images/NobaraWallpaper.jpg'

const Pagina3 = () => {
  return (
    <main>
        <section>
            <h2>Página 3</h2>
            <p>Esta é a página três</p>
            <img src={Nobaraimg} className='nobaraimg' alt='Nobara de Jujutsu Kaisen' />
        </section>
    </main>
  )
}

export default Pagina3