import React from 'react';
import bg from '../assets/Images/Newsletter.avif';

const NewsLetter = () => {
    return (
        <div className="relative h-[80vh] flex items-center justify-center text-white px-6"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 text-center max-w-2xl">
                {/* Heading*/}
                <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
                    Everything You Need to Know <br />
                    About Plants and More. No Spam, <br />
                    We Promise.
                </h1>
                <p className="mb-10 text-lg text-white/80">
                    Subscribe now and get 15% off your first purchase
                </p>
                <div className="flex flex-col md:flex-row items-center gap-4 justify-center mb-4">
                    <input
                        type="email"
                        placeholder="Enter your email here *"
                        className="w-full md:w-100 px-4 py-3 bg-transparent border border-white outline-none"/>
                    <button className="bg-orange-600 px-7 py-2 rounded-lg hover:bg-[#6b6f3f] transition">
                        Subscribe
                    </button>
                </div>
                {/* CHECKBOX */}
                <div className="flex items-center justify-center gap-2 text-sm">
                    <input type="checkbox" />
                    <p>Yes, subscribe me to your newsletter.</p>
                </div>
            </div>
        </div>
    )
}
export default NewsLetter