import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header>
        <Image src={'/logo.png'} 
        width={119}
        height={73}
        alt={'Logo Hotel Calacoto'}/>
        <Navbar/>
    </header>
    
  )
}

export default Header