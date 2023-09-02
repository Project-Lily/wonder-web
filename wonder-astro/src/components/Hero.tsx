import React from 'react';
import logo from '../assets/wonder_logo1.png';
import inequal from '../assets/sdg_reduced_inequalities.png';
import edu from '../assets/sdg_quality_education.png';
import hero from '../assets/wonder_3d.png'

export default function Nav() {
  return (
<section className="bg-purple-500 py-20">
  <div className="container mx-auto flex items-center justify-between px-10 border-4 border-black rounded-lg shadow-lg bg-white w-4/5">
    <div className="w-1/2">
      <h1 className="text-4xl font-bold mb-4">Introducing <br/> Wonder Reader</h1>
      <p className="text-lg mb-4">The revolutionary braille keyboard meant for everyone to learn and grow.</p>
      <p className="text-sm">As featured on the Google Solution Challenge</p>
    </div>
    <div className="w-1/2 flex justify-center">
      <img src={hero} className=" h-auto" alt="Wonder Reader" />
    </div>
  </div>
</section>
  );
}
