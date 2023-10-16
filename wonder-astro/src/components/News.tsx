import React from 'react'
import conference1 from '../assets/conference1.png'
import jj from '../assets/jj.png'

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
                <span className='mx-3'>Jason Jeremy Wijadi on 17 Sep '23</span>
            </div>
            <div className='w-1/3'>
                <img src={conference1} className='mb-6'></img>
                <span className='opacity-70 text-2xl font-medium text-wonder-text'>CONFERENCE</span>
                <h1 className='text-4xl font-extrabold text-wonder-text my-10 w-96'>Wonder Reader at ICEVI 2023!</h1>
                <img src={jj} className='inline-block'></img>
                <span className='mx-3'>Jason Jeremy Wijadi on 17 Sep '23</span>
            </div>
            <div className='w-1/3'>
                <img src={conference1} className='mb-6'></img>
                <span className='opacity-70 text-2xl font-medium text-wonder-text'>CONFERENCE</span>
                <h1 className='text-4xl font-extrabold text-wonder-text my-10 w-96'>Wonder Reader at ICEVI 2023!</h1>
                <img src={jj} className='inline-block'></img>
                <span className='mx-3'>Jason Jeremy Wijadi on 17 Sep '23</span>
            </div>
        </div>
    </div>
  )
}

export default News