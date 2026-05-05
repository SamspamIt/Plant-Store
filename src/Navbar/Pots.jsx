import React,{useState} from 'react';
import pot from '../assets/Pot images/Potbg.avif';
import pot1 from '../assets/Pot images/Potbg1.avif';
import pot2 from '../assets/Pot images/Potbg2.avif';
import pot3 from '../assets/Pot images/Potbg3.avif';
import pot4 from '../assets/Pot images/Potbg4.avif';
import pot5 from '../assets/Pot images/Potbg5.avif';
import pot6 from '../assets/Pot images/Potbg6.avif';
import pot7 from '../assets/Pot images/Potbg7.avif';
import pot8 from '../assets/Pot images/Potbg8.avif';

const pots=[
    { id:1, name :"Graphite Pot", price :"$11.99", image:pot1},
    { id:2, name:"Rusty Flowerpot", price:"$20.99", image:pot2},
    { id:3, name:"Rattan Basket", price:"$32.99", image:pot3},
    { id:4, name:"Concrete Pot", price:"$11.99", image:pot4},
    { id:5, name:"Wooden Basket", price:"$28.99", image:pot5},
    { id:6, name:"Metal Pot", price:"$19.49", image:pot6},
    { id:7, name:"Pot Stand", price:"$15.99", image:pot7},
    { id:8, name:"Beige Pot", price:"$11.99", image:pot8},

    
]
const Pots = () => {
    const [greens, setGreens] = useState(36);
    return (
        <div className=" bg-black text-white min-h-screen flex pt-32">
                    {/* Left side */}
                    <div className="w-52 min-w-52 px-6 py-10 border-r border-gray-800 ">
                        <h3 className="text-base font-light mb-3 tracking-wide">
                            Browse by
                        </h3>
                        <hr className="border-gray-700 mb-4" />
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="hover:text-white cursor-pointer transition">All Products</li>
                            <li className="hover:text-white cursor-pointer transition">New Arrivals</li>
                            <li className="hover:text-white cursor-pointer transition">Plants</li>
                            <li className="text-white font-semibold cursor-pointer">Pots</li>
                            <li className="hover:text-white cursor-pointer transition">Sale</li>
                            <li className="hover:text-white cursor-pointer transition">Subscriptions</li>
                        </ul>
                        <h3 className="text-base font-light mt-10 mb-3 tracking-wide">
                            Filter by
                        </h3>
                        <hr className="border-gray-700 mb-4" />
                        <div className="mb-6">
                            <div className="flex justify-between text-sm text-gray-400 mb-2">
                                <span>Price</span>
                                <span>−</span>
                            </div>
                            <input
                                onChange={(e) => setGreens(e.target.value)}
                                type="range"
                                min={11}
                                max={33}
                                value={greens}
                                className="w-full accent-white"/>
                                <div className="flex justify-between text-xs text-gray-400 mt-1">
                                    <span>$11</span>
                                    <span>${greens}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-400">
                                    <span>Colour</span>
                                    <span>+</span>
                                </div>
                        </div>
                        </div>
                        {/* Right Side */}
                        <div className="flex-1 px-8 py-10">
                        {/* Banner Image */}
                        <img src={pot} alt="Pots Banner"
                            className="w-full h-64 object-cover mb-8"/>
                        {/* Heading */}
                        <h1 className="text-6xl font-cormorant font-light mb-2">Pots</h1>
                        <p className="text-sm text-gray-400 mb-8">{pots.length} pots</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {pots.map((item) => (
                                <div key={item.id} className=" text- relative group">
                                    {item.sale && (
                                    <span className="absolute top-2 left-2 z-10 bg-[#6b6f3f] text-orange-700 text-xs px-2 py-1">
                                        Sale
                                    </span>
                                    )}
                                    <div className="overflow-hidden">
                                    <img src={item.image} alt={item.name}
                                        className="w-full h-120 object-cover group-hover:scale-105 transition duration-500"
                                    />
                                    </div>
                                    <div className="p-4">
                                        <h2 className="text-base font-light mb-1">{item.name}</h2>
                                        <p className="text-sm mb-3 text-white">{item.price}</p>
                                        <button className="w-full bg-black text-white text-sm py-2 border hover:bg-[#6b6f3f] transition duration-300 cursor-pointer">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                                ))}
                        </div>
                    </div>
                </div>
    )
}

export default Pots
