import React from 'react';
import seed1 from '../assets/Images/SeedGram1.jpg';
import seed2 from '../assets/Images/SeedGram2.jpg';
import seed3 from '../assets/Images/SeedGram3.jpg';
import seed4 from '../assets/Images/SeedGram4.jpg';
import seed5 from '../assets/Images/SeedGram5.jpg';
import seed6 from '../assets/Images/SeedGram6.jpg';
import seed7 from '../assets/Images/SeedGram7.jpg';
import seed8 from '../assets/Images/SeedGram8.jpg';
import seed9 from '../assets/Images/SeedGram9.jpg';
import seed10 from '../assets/Images/SeedGram10.jpg';

const SeedGram = () => {

    const images=[seed1,seed2,seed3,seed4,seed5,seed6,seed7,seed8,seed9,seed10];

    return (
        <div className="min-h-screen bg-[#6b6f3f] px-10 py-16">
            {/* Heading */}
            <h1 className="text-6xl md:text-7xl font-serif text-white text-center mb-16">
                Sprout on the #Gram
            </h1>
            <div className="grid grid-cols-5 lg:grid-cols-5 gap-2">
                {images.map((img, index) => (
                <div key={index} className="relative group overflow-hidden">
                    {/* Image */}
                    <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                    />
                </div>
                ))}
            </div>
        </div>
    )
}
export default SeedGram