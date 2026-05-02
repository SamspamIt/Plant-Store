import React from 'react';
import img1 from '../assets/Images/Guide1.avif';
import img2 from '../assets/Images/Guide2.avif';
import img3 from '../assets/Images/Guide3.avif'

const Guide = () => {
    const blog = [
    {
        id: 1,
        date: "Jun 5, 2023",
        read: "1 min read",
        title: "How to Repot Plants",
        description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.......",
        image: img1,
    },
    {
        id: 2,
        date: "Jun 5, 2023",
        read: "2 min read",
        title: "How to Treat Leaf Spots",
        description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.......",
        image: img2,
    },
    {
        id: 3,
        date: "Jun 5, 2023",
        read: "1 min read",
        title: "Keep Them Alive Through the Seasons",
        description: "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.......",
        image: img3,
    }
];
    return (
        <div className='w-full px-10 py-16 bg-[#dcd6cb]'>
            {/* Heading */}
            <div className='flex justify-between items-center mb-14'>
                <div>
                    <p className='text-sm mb-2'>Our Blog</p>
                    <h1 className='text-5xl font-serif'>
                        Your Guide to Plant Care
                    </h1>
                </div>
                <button className='bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-[#6b6f3f] transition'>
                Read More
                </button>
            </div>
            {/* Cards */}
            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {blog.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                    {/* Images */}
                    <div className="overflow-hidden">
                        <img
                            src={item.image}
                            alt=""
                            className="w-full h-55 object-cover group-hover:scale-105 transition duration-500"/>
                    </div>
                    <p className="text-xs text-gray-600 mt-4">
                        {item.date} • {item.read}
                    </p>
                    {/* Tittle */}
                    <h2 className="text-xl font-serif mt-2 hover:text-orange-700">
                        {item.title}
                    </h2>
                    {/* Description */}
                    <p className="text-sm text-gray-600 mt-2 hover:text-orange-700">
                        {item.description}
                    </p>
                    {/* Emojis*/}
                    <div className="border-t mt-6 pt-4 flex justify-between text-sm text-gray-600">
                        <span>👁 6</span>
                        <span>💬 3</span>
                        <span>❤️20</span>
                    </div>
                </div>
                ))}
            </div>
        </div>
)
}
export default Guide







