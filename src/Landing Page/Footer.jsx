import React from 'react';
import logo from '../assets/Icons/Sprout.png';

const Footer = () => {
    return (
        <footer className="bg-black text-white px-10 py-16">
            <div className="flex flex-col items-center mb-12">
                <img src={logo} alt="logo" 
                    className="w-30 mb-2 " />
            </div>
            <div className="border-t border-white/20 mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-sm ">
                {/* Contact */}
                <div className='cursor-pointer'>
                    <h3 className="mb-4 font-semibold">
                        Contact
                    </h3>
                    <p>Address: 500 Terry</p>
                    <p>Francine Street</p>
                    <p>San Francisco, CA 94158</p>
                    <p className="mt-2">
                        Phone: 123-456-7890
                    </p>
                    <p>Email: info@mysite.com</p>
                </div>
                {/* Shop  */}
                <div className='cursor-pointer'>
                    <h3 className="mb-4 font-semibold">
                        Shop
                    </h3>
                    <p>Shop All</p>
                    <p>Plants</p>
                    <p>Pots</p>
                    <p>Sale</p>
                    <p>Gift Card</p>
                    <p>Subscriptions</p>
                    <p>Care</p>
                </div>
                {/* Links */}
                <div className='cursor-pointer'>
                    <h3 className="mb-4 font-semibold">
                        Helpful Links
                    </h3>
                    <p>FAQ</p>
                    <p>Shipping & Returns</p>
                    <p>Terms & Conditions</p>
                    <p>Payment Methods</p>
                </div>
                {/* COMPANY */}
                <div className='cursor-pointer'>
                    <h3 className="mb-4 font-semibold">
                        Company
                    </h3>
                    <p>Our Story</p>
                    <p>Contact Us</p>
                </div>
                {/* Opening Hours */}
                <div className='cursor-pointer'>
                    <h3 className="mb-4 font-semibold">
                        Opening Hours
                    </h3>
                    <p>Mon - Fri: 7am - 10pm</p>
                    <p>Saturday: 8am - 10pm</p>
                    <p>Sunday: 8am - 11pm</p>
                </div>
            </div>
            <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-white/70">
                © 2026 by Sprout. Powered and secured by XYZ Company
            </div>
        </footer>
    )
}
export default Footer