import React from 'react'
import Krusty from '../assets/krusty.jpg'

const Hero = () => {
  return (
    <div className='bg-white h-screen mx-auto'>
        <h1 className="text-center md: text-6xl sm:text-6xl text-4xl font-bold md:py-6 py-4">
          Krusty The Clown's Crypto Tracker
        </h1>
        <img src={Krusty} alt="Krusty The Clown" className="mx-auto bg-white" />
    </div>
  )
}

export default Hero