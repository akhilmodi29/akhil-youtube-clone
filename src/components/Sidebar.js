import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    if (!isMenuOpen) return null;

    return (
        <div className='w-64 h-screen overflow-y-auto p-3 sticky top-0 bg-[#0f0f0f] text-gray-200 border-r border-[#272727]'>

            {/* Main Nav */}
            <ul className='mb-4'>
                <Link to="/"><li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-[#272727] cursor-pointer font-medium'>🏠 <span>Home</span></li></Link>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-[#272727] cursor-pointer font-medium'>🎵 <span>Shorts</span></li>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-[#272727] cursor-pointer font-medium'>📺 <span>Subscriptions</span></li>
            </ul>

            <hr className='my-2 border-[#272727]'/>

            {/* You section */}
            <h2 className='px-3 py-1 text-sm font-semibold text-gray-400'>You</h2>
            <ul className='mb-4'>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-[#272727] cursor-pointer'>🕐 <span>History</span></li>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-[#272727] cursor-pointer'>▶️ <span>Your Videos</span></li>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-[#272727] cursor-pointer'>⏰ <span>Watch Later</span></li>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-[#272727] cursor-pointer'>👍 <span>Liked Videos</span></li>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-[#272727] cursor-pointer'>📋 <span>Playlists</span></li>
            </ul>

            <hr className='my-2 border-[#272727]'/>

            {/* Subscriptions */}
            <h2 className='px-3 py-1 text-sm font-semibold text-gray-400'>Subscriptions</h2>
            <ul className='mb-4'>
                <Link to="/results?search_query=Gaming"><li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-[#272727] cursor-pointer'>🎮 <span>Gaming</span></li></Link>
                <Link to="/results?search_query=Music"><li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-[#272727] cursor-pointer'>🎵 <span>Music</span></li></Link>
                <Link to="/results?search_query=Sports"><li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-[#272727] cursor-pointer'>⚽ <span>Sports</span></li></Link>
                <Link to="/results?search_query=Movies"><li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-[#272727] cursor-pointer'>🎬 <span>Movies</span></li></Link>
            </ul>

            <hr className='my-2 border-[#272727]'/>

            {/* Explore */}
            <h2 className='px-3 py-1 text-sm font-semibold text-gray-400'>Explore</h2>
            <ul className='mb-4'>
                <Link to="/results?search_query=Trending"><li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-[#272727] cursor-pointer'>🔥 <span>Trending</span></li></Link>
                <Link to="/results?search_query=Shopping"><li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-[#272727] cursor-pointer'>🛍️ <span>Shopping</span></li></Link>
                <Link to="/results?search_query=Music"><li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-[#272727] cursor-pointer'>🎵 <span>Music</span></li></Link>
                <Link to="/results?search_query=Films"><li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-[#272727] cursor-pointer'>🎬 <span>Films</span></li></Link>
                <Link to="/results?search_query=Live"><li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-[#272727] cursor-pointer'>📡 <span>Live</span></li></Link>
                <Link to="/results?search_query=Gaming"><li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-[#272727] cursor-pointer'>🎮 <span>Gaming</span></li></Link>
                <Link to="/results?search_query=News"><li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-[#272727] cursor-pointer'>📰 <span>News</span></li></Link>
                <Link to="/results?search_query=Sports"><li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-[#272727] cursor-pointer'>🏆 <span>Sports</span></li></Link>
            </ul>

            <hr className='my-2 border-[#272727]'/>

            {/* Settings */}
            <ul className='mb-4'>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-[#272727] cursor-pointer'>⚙️ <span>Settings</span></li>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-[#272727] cursor-pointer'>🚩 <span>Report history</span></li>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-[#272727] cursor-pointer'>❓ <span>Help</span></li>
            </ul>

        </div>
    );
};
