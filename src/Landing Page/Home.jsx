import React from 'react';
import bgImage from '../assets/Images/Background.avif';
// import NewArrivals from './NewArrivals';
import Category from './Category';
import Story from './Story';
import Guide from './Guide';
import Arrivals from './Arrivals';
import Subscription from './Subscription';
import SeedGram from './SeedGram';
import NewsLetter from './NewsLetter';



const Home = () => {
    return (
        <>
            <div
            className="h-screen w-full bg-no-repeat bg-center bg-cover flex items-center justify-center"
            style={{ backgroundImage: `url(${bgImage})`, backgroundAttachment:'fixed'}}
            >

            <div className="text-center text-white z-10">
                <h1 className="text-6xl font-cormorant">
                Is There Such a Thing as 
                    <br/>
                Too Many Plants
                </h1>
                <p className='font-jost'>
                Discover the latest addition to your growing plant collection
                </p>
                <button className='text-md text-white border border-white p-1 rounded mt-15 cursor-pointer hover:bg-black/40'>
                    Shop Plants
                </button>
            </div>
        </div>
        {/* <NewArrivals/> */}
        <Arrivals/>
        <Category/>
        <Story/>
        <Subscription/>
        <Guide/>
        <SeedGram/>
        <NewsLetter/>
        </>
    )
}

export default Home
