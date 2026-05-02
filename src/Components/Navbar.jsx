import React from 'react';
import {Form, Link} from 'react-router-dom';
import {Gift , Search , ShoppingBag , User} from 'lucide-react';


const Navbar = () => {
    return (
        <div>
            <div className='absolute top-20 left-2 bg-black/45 rounded text-white text-xs p-2 flex gap-3  cursor-pointer'>
                    <Link to='/'>Plants</Link>
                    <Link to='/pots'>Pots</Link>
                    <Link to='/sale'>Sale</Link>
                    <Link to='/subscription'>Subscription</Link>
                    <Link to='/care'>Care</Link>
            </div>
            <div className='absolute top-20 right-30 bg-black/45  rounded text-white text-xs p-2 flex gap-3' >
                <Link to='/login'>Login</Link>
                <Link to='/search'>Search</Link>
            </div>
            <div className='absolute top-22 right-5 flex items-center gap-2 text-white text-xs cursor-pointer'>
                <Gift size={18}
                    className='cursor-pointer'/>
                <ShoppingBag size={18} 
                    className='cursor-pointer'/>
                    <span>Cart 0</span>
            </div>
        </div>
    )
}

export default Navbar
