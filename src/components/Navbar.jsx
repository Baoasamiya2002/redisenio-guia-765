import React from 'react' //también inv si esto es necesario
import logo_institucional_gobierno from '../assets/logo_institucional_gobierno.png'

const Navbar = () => {
  return (
    <nav aria-label='Guia *765' className='bg-white flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='https://semujeres.cdmx.gob.mx/'>
          <img src={logo_institucional_gobierno} aria-label='Logo Secretaría de las Mujeres de la CDMX'/>
        </a>
        <a className='flex space-x-3'>
          <p style={{color: "#F3903C", fontFamily: "FedraSansProBold", fontSize: "44px"}}>Guia *765</p>
        </a>
        <a>Menu</a>
    </nav>
  )
}

export default Navbar