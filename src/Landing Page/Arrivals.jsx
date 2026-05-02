import React from 'react';
import product1 from '../assets/Images/Product1.png';
import product2 from '../assets/Images/Product2.1.avif';
import product3 from '../assets/Images/Product3.png';
import product4 from '../assets/Images/Product4.1.avif'

const Arrivals = () => {
    const products=[
        {
            id:1,
            name:"Ficus Lyrata",
            price:'$35.99',
            ratings:'4.0(13)',
            image: product1,
        },
        {
            id:2,
            name:"Rusty Flowerpot",
            price:'$20.99',
            ratings:'3.0(10)',
            image:product2,
        },
        {
            id:3,
            name:"Cactus",
            price:'$35.99',
            ratings:'4.5(11)',
            image:product3,
        },
        {
            id:4,
            name:"Wooden Basket",
            price:'$28.99',
            ratings:'4.0(13)',
            image:product4,
        }
    ]
    return (
        <div className='bg-[#dcd6cb] min-h-screen px-10 py-16'>

            {/* Heading */}
            <div className='flex justify-between items-center mb-12'>
                    <h1 className='text-5xl font-serif'>
                        New Arrivals 
                    </h1>

                    {/* Button */}
                    <button className='bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-[#6b6f3f] hover:text-'>
                        Shop All
                    </button>

            </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                        {products.map((item)=>(
                            <div key={item.id}>
                                <img src={item.image} alt={item.name} width="200px"/>
                                <h2>{item.name}</h2>
                                <p>{item.price}</p>
                            
                            </div>
                        ))}
                    </div>
        </div>
    )
}

export default Arrivals
