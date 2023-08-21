import React from 'react';
import logo from '../assets/wonder_logo1.png';
import inequal from '../assets/sdg_reduced_inequalities.png';
import edu from '../assets/sdg_quality_education.png';

export default function Nav() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-center py-20">
      <div className="lg:w-1/2 p-28">
        <h1 className="text-3xl font-extrabold mb-4">Introducing, Wonder Reader</h1>
        <p className="mb-6">
          The revolutionary braille device that will change the world
        </p>
        <div className='text-center lg:text-left'>
            <img className='h-24 inline mr-4' src={edu}></img>
            <img className='h-24 inline' src={inequal}></img>
        </div>
      </div>
      <div className="lg:w-1/2 p-8">
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            height='400'
            width='560'
            className="rounded-lg shadow-lg"
            title="YouTube Video"
            src="https://www.youtube.com/embed/JViAbPYdxp4?si=-6KGODB255EXW7qy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
