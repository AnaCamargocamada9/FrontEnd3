import React from 'react'
import {useAppContext} from "./utils/useAppContext.jsx";

const Footer = () => {

  const { state } = useAppContext();
  return (
    <footer  className={state.theme === 'dark' ? 'dark-mode' : 'light-mode'}>
        <p>Powered by Ana Camargo</p>
        <img src="./images/DH.png" alt='DH-logo' />

        <div className='social-medias'>
        <img src="./images/ico-facebook.png" alt='facebook' />
        <img src="./images/ico-instagram.png" alt='instagram' />
        <img src="./images/ico-tiktok.png" alt='tiktoc' />
        <img src="./images/ico-whatsapp.png" alt='whatsapp' />
      </div>

    </footer>
  )
}

export default Footer
