import React, { useState } from 'react';
import subs from '../assets/Subscription image/Subsbg.avif';
import subs1 from '../assets/Subscription image/Subsbg1.avif';
import subs2 from '../assets/Subscription image/Subsbg2.avif';

const script=[
    { id:1, name :"Exotic Plants Subscription", price :"$100.00", image:subs1},
    { id:2, name:"Cactus Lover Subscription", price:"$100.00", image:subs2},
]

const Subscriptions = () => {

    const[offer , setOffer]=useState(36);

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
                            <li className="text-white font-semibold cursor-pointer">Plants</li>
                            <li className="hover:text-white cursor-pointer transition">Pots</li>
                            <li className="hover:text-white cursor-pointer transition">Sale</li>
                            <li className="hover:text-white cursor-pointer transition">Subscriptions</li>
                        </ul>
                        {/* <h3 className="text-base font-light mt-10 mb-3 tracking-wide">
                            Filter by
                        </h3>
                        <hr className="border-gray-700 mb-4" />
                        <div className="mb-6">
                            <div className="flex justify-between text-sm text-gray-400 mb-2">
                                <span>Price</span>
                                <span>−</span>
                            </div>
                            <input
                                onChange={(e) => set(e.target.value)}
                                type="range"
                                min={14}
                                max={36}
                                value={}
                                className="w-full accent-white"/>
                                <div className="flex justify-between text-xs text-gray-400 mt-1">
                                    <span>$14</span>
                                    <span>${}</span>
                                </div>
                                <div className="flex justify-between text-sm text-gray-400">
                                    <span>Size</span>
                                    <span>+</span>
                                </div>
                        </div> */}
                        </div>
                        {/* Right Side */}
                        <div className="flex-1 px-8 py-10">
                        {/* Banner Image */}
                        <img src={subs} alt="Plants Banner"
                            className="w-full h-64 object-cover mb-8"/>
                        {/* Heading */}
                        <h1 className="text-6xl font-cormorant font-light mb-2">Plants</h1>
                        <p className="text-sm text-gray-400 mb-8">{script.length} products</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {script.map((item) => (
                                <div key={item.id} className="bg-[#dcd6cb] text-black relative group">
                                    {item.sale && (
                                    <span className="absolute top-2 left-2 z-10 bg-[#6b6f3f] text-white text-xs px-2 py-1">
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
                                        <p className="text-sm mb-3 text-gray-700">{item.price}</p>
                                        <button className="w-full bg-black text-white text-sm py-2 hover:bg-[#6b6f3f] transition duration-300 cursor-pointer">
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

export default Subscriptions
