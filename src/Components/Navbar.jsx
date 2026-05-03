import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import Icon from '../assets/Icons/Sprout.png';
import {Gift , Search , ShoppingBag , User} from 'lucide-react';


const Navbar = () => {

    const[cartCount]=useState(0);

    return (
        <nav className='absolute top-20 left-0 w-full flex items-center justify-between px-10 py-2 z-50'>
            {/* Navbar */}
            <div className=' bg-black/45 rounded text-white text-xs px-4 py-2 flex gap-4  cursor-pointer'>
                    <Link to='/plants' className='hover:bg-orange-700'>Plants</Link>
                    <Link to='/pots' className='hover:bg-orange-700'>Pots</Link>
                    <Link to='/sale' className='hover:bg-orange-700'>Sale</Link>
                    <Link to='/subscription' className='hover:bg-orange-700'>Subscription</Link>
                    <Link to='/care' className='hover:bg-orange-700'>Care</Link>
            </div>

            {/* Logo */}
            <div className='absolute left-1/2 -translate-x-1/2 flex flex-col items-center top-2'>
                <img src={Icon} alt='"Sprout' 
                    className='h-30 w-30 object-contain'/>
            </div>

            <div className='flex items-center gap-4 text-white' >
                <Link to="/login">
                    <div className='bg-black/40 rounded px-3 py-1.5 flex items-center gap-1.5 text-xs hover:bg-black/60 transition'>
                        <User size={14} />
                        <span>Log In</span>
                    </div>
                </Link>
                <div className="bg-black/40 rounded p-1.5 hover:bg-black/60 transition cursor-pointer">
                    <Search size={14} className="text-white" />
                </div>
                <Gift size={18} className="cursor-pointer hover:scale-110 transition" />
                <div className="flex items-center gap-1 cursor-pointer hover:scale-105 transition">
                    <ShoppingBag size={18} />
                    <span className="text-xs">
                        Cart {cartCount}
                    </span>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar
