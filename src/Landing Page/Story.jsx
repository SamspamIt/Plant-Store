import React from 'react'
import Stbg from '../assets/Images/Story.avif'

const Story = () => {
    return (
        <section className='relative min-h-screen md:h-screen bg-cover bg-center 
            flex items-center justify-center' style={{backgroundImage:`url(${Stbg})`}}>
            <div className='absolute inset-0 bg-black/40'></div>
            <div className='relative z-10 text-center text-white px-6 max-w-2xl'>
                <h1 className='text-3xl md:text-5xl font-serif font-semibold mb-4'>
                    From Seed to Sprout
                </h1>
                <p className='text-sm md:text-lg leading-relaxed mb-6'>
                    I'm a paragraph.Click here to add your own text and edit me.It's<br></br>
                    easy.Just a click "Edit Text" or double click me to add your own content<br></br>
                    and make changes to the font. I'm a great place for you to tell a story<br></br>
                    and let your users know a little more about you.
                </p>
                <button className='border border-white rounded-md px-6 py-2 hover:bg-zinc-800 cursor-pointer '>Our Story</button>
            </div>
        </section>
    )
}

export default Story
