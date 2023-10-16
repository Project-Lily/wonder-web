import React from 'react';
import affordable from '../assets/affordable.svg';
import refreshable from '../assets/refreshable.svg';
import teachable from '../assets/teachable.svg';

function Features() {
  return (
    <section className='w-full bg-wonder-dark my-14 h-screen'>
      <div className='flex justify-center mx-48 align-middle items-center h-full text-white'>
        <div className='w-1/3 p-12 text-center'>
          <img src={affordable} className='mx-auto mb-8'></img>
          <span className='text-4xl font-bold'>Affordable</span>
          <p className='text-base mt-10'>A braille keyboard with a production cost of under 4jt IDR! (amongst the most affordable in the world)</p>
        </div>
        <div className='w-1/3 p-12 text-center'>
          <img src={refreshable} className='mx-auto mb-8'></img>
          <span className='text-4xl font-bold'>Refreshable</span>
          <p className='text-base mt-10'>It currently has 9 braille cells that are fully refreshable, saving time and creating a better experience.</p>
        </div>
        <div className='w-1/3 p-12 text-center'>
          <img src={teachable} className='mx-auto mb-8'></img>
          <span className='text-4xl font-bold'>Teachable</span>
          <p className='text-base mt-10'>An in-house made app and built-in speakers can be found on Wonder Reader, enabling braille education.</p>
        </div>
      </div>
  </section>
  );
}

export default Features;
