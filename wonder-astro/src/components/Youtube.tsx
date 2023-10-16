import React from 'react';

function Youtube() {
    return (
      <section>
          <div className='container flex items-center border-black my-4'>
            <div className='mx-auto'>
              <iframe className='mx-auto border-black border-4 p-7 rounded-lg bg-white' width="650" height="400" src="https://www.youtube.com/embed/JViAbPYdxp4?si=UnA2XHeCDHyqPzFr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
      </section>
    );
}   

export default Youtube