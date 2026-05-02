import React from 'react';
import subs from '../assets/Images/Subscription1.avif'

const Subscription = () => {
    return (
        <div className="flex h-screen">
            {/* LEFT Side */}
            <div className="w-1/2">
                <img
                    src={subs}
                    alt="plants"
                    className="w-full h-full object-cover cursor-pointer"/>
            </div>
            {/* RIGHT Side */}
            <div className="w-1/2 bg-[#c25b0c] text-white flex items-center">
                <div className="px-16 max-w-md">
                    {/* HEADING */}
                    <h2 className="text-3xl font-serif mb-4 leading-snug">
                        Shop Our Plant <br /> Subscription Boxes
                    </h2>
                    <p className="text-sm mb-10 text-white/80">
                        and look forward to a new plant every month
                    </p>
                    {/* ITEM 1 */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="border border-white rounded-full p-4">
                            🌵
                        </div>
                        <div>
                            <p className="text-sm">
                                Cactus Lover
                            </p>
                            <p className="text-xs text-white/70">
                            Subscription
                            </p>
                        </div>
                    </div>
                    {/* ITEM 2 */}
                    <div className="flex items-center gap-4 mb-10">
                        <div className="border border-white rounded-full p-4">
                            🌿
                        </div>
                        <div>
                            <p className="text-sm">
                                Exotic Plants
                            </p>
                            <p className="text-xs text-white/70">
                                Subscription
                            </p>
                        </div>
                    </div>
                    {/* BUTTON */}
                    <button className="border border-white  rounded-lg px-6 py-2 text-sm hover:bg-black/70 hover:text-white transition">
                        Subscription Boxes
                    </button>
                </div>
            </div>
        </div>






    )
}

export default Subscription
