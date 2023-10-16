import React from 'react'
import binus from '../assets/binus.png'
import gdsc from '../assets/gdsc.png'
import google from '../assets/google.png'
import mitra from '../assets/mitra.png'
import hero from '../assets/hero.png'
import inequality from '../assets/reduced inequality.png'
import handy from '../assets/handy.png'

function Hero() {
  return (
    <section className='relative mx-auto w-11/12 bg-gradient-to-b from-wonder-purple-transparent  from-0% to-wonder-background to-100% h-screen rounded-2xl overflow-hidden'>
      <img src={hero} className='absolute right-0 top-72'></img>
      <img src={inequality} className='absolute right-4'></img>
      <img src={handy} className='absolute right-0 top-10'></img>
      <div className='pl-14 py-20'>
        <span className='text-wonder-text text-7xl font-extrabold'>Discover</span><span className='text-wonder-purple text-7xl font-extrabold'> Wonder Reader:</span>
        <br/>
        <span className='text-wonder-text text-6xl font-extrabold'>a braille keyboard for </span> <span className='text-wonder-purple text-6xl font-extrabold'>all</span>
        <br/>
        <div className='w-1/2 opacity-80 py-4'>
          <span className='text-wonder-text text-3xl font-normal'>The revolutionary braille keyboard meant for everyone to learn and grow.</span>
        </div> 
        <button className='my-8 bg-wonder-purple text-white py-4 px-14 rounded-2xl h-auto text-left'>Contact Us!</button>
        <br/>
        <span className='text-2xl opacity-60 font-normal'>Our wonderful partners!</span>
        <div className='flex'>
          <img src={gdsc} className='max-w-full max-h-full object-contain mr-4'></img>
          <img src={mitra} className='max-w-full max-h-full object-contain mr-4'></img>
          <img src={google} className='max-w-full max-h-full object-contain mr-4'></img>
          <img src={binus} className='max-w-full max-h-full object-contain'></img>
        </div>
      </div>
    </section>
  )
}

export default Hero 