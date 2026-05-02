import React from 'react';
import img1 from '../assets/Images/Cat1.png';
import img2 from '../assets/Images/Cat2.png';
import img3 from '../assets/Images/Cat3.png';

const Category = () => {

    const categories=[
        {
            id:1,
            tittle:"Plant",
            image:img1,
        },
        {
            id:2,
            tittle:"Pots",
            image:img2,
        },
        {
            id:3,
            tittle:"Subscription",
            image:img3
        },
    ]
    return (
        <div className='bg-black/90 text-white px-10 py-16'>

{/* Headline */}
            <p className='text-center text-sm mb-4'>
                Shop by Category
            </p>

{/* Tittle */}
            <h1 className='text-7xl md:text-6xl font-serif text-center mb-16'>
                Discover Sprout
            </h1>

            {/* Image Section */}
            <div className='grid grid-cols-3 gap-1 h-125'>

{/* Left side */}
                <div className='col-span-2 row-span-2 relative'>
                    <img src={categories[0].image} alt=''
                        className='w-full h-full object-cover'
                        />
                    <p className='absolute bottom-4 left-4'>
                        {categories[0].tittle}
                    </p>
                </div>

{/* Right Side- Top */}
                <div className='relative'>
                    <img src={categories[1].image}
                        className='w-full h-full object-cover'
                    />
                    <p className='absolute bottom-4 left-4'>
                        {categories[1].tittle}
                    </p>
                </div>

{/* Right Side-Bottom */}
                <div className="relative">
                    <img
                    src={categories[2].image}
                    alt=""
                    className="w-full h-full object-cover"
                    />
                    <p className="absolute bottom-4 left-4">
                        {categories[2].title}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Category










// 2N6%qpaDiE{<sQeh>}="print_NU44"