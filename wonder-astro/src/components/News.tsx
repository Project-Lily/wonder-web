import React from 'react'
import conference1 from '../assets/conference1.png'
import conference2 from '../assets/conference2.png'
import other from '../assets/other.png'
import jj from '../assets/jj.png'
import jason from '../assets/jason.png'
import aric from '../assets/aric.png'

function News() {
  return (
    <div className='h-screen m-20 pt-10'>
        <h1 className='text-4xl font-extrabold'>What's New at Wonder Reader?</h1>
        <div className='w-full flex justify-center my-10'>
            <div className='w-1/3'>
                <img src={conference1} className='mb-6'></img>
                <span className='opacity-70 text-2xl font-medium text-wonder-text'>CONFERENCE</span>
                <h1 className='text-4xl font-extrabold text-wonder-text my-10 w-96'>Wonder Reader at ICEVI 2023!</h1>
                <img src={jj} className='inline-block'></img>
                <span className='mx-3 opacity-60'>Jason Jeremy Wijadi on 17 Sep '23</span>
            </div>
            <div className='w-1/3'>
                <img src={conference2} className='mb-6'></img>
                <span className='opacity-70 text-2xl font-medium text-wonder-text'>CONFERENCE</span>
                <h1 className='text-4xl font-extrabold text-wonder-text my-10 w-96'>Wonder Reader at ICEVI India 2024!</h1>
                <img src={jason} className='inline-block'></img>
                <span className='mx-3 opacity-60'>Jason Christian on 12 Mar '23</span>
            </div>
            <div className='w-1/3'>
                <img src={other} className='mb-6'></img>
                <span className='opacity-70 text-2xl font-medium text-wonder-text'>OTHERS</span>
                <h1 className='text-4xl font-extrabold text-wonder-text my-10 '>Refreshable Braille Cells and Sustainability</h1>
                <img src={aric} className='inline-block'></img>
                <span className='mx-3 opacity-60'>Aric Hernando on 15 Oct '23</span>
            </div>
        </div>
    </div>
  )
}

export default News