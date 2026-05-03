import React, { useState, useEffect } from 'react'

const announcements = [
    {
        bg: 'bg-orange-500',
        text: 'Free Shipping on orders over $75',
        btn: null
    },
    {
        bg: 'bg-[#6B7C45]',
        text: 'Get 15% off on your first order!',
        btn: 'Sign Up'
    },
    ]

const Topbar = () => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
        setCurrent(prev => (prev + 1) % announcements.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const { bg, text, btn } = announcements[current]

    return (
        <div className={`${bg} text-white text-xs py-2 flex items-center justify-center gap-4 transition-colors duration-700 w-full`}>
        <p className="tracking-wide font-jost">{text}</p>
        {btn && (
            <button className="border border-white text-white text-xs px-3 py-1 rounded hover:bg-white hover:text-black transition duration-300 cursor-pointer">
            {btn}
            </button>
        )}
        </div>
    )
    }

    export default Topbar