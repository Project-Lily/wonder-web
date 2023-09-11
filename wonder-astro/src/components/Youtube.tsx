import React from 'react'

function Youtube() {
  return (
    <section>
        <div className='mx-auto bg-gradient-to-b from-purple-500 to-white to-50%'>
            <iframe className='mx-auto border-black border-4 p-7 rounded-lg bg-white' width="650" height="400" src="https://www.youtube.com/embed/JViAbPYdxp4?si=UnA2XHeCDHyqPzFr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </section>
  )
}

export default Youtube