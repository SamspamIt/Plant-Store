import React from 'react';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Footer from '../Landing Page/Footer';

const Layout = ({children}) => {
    return (
        <div>
            <Topbar/>
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout
