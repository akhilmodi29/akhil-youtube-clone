import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    if (!isMenuOpen) return null;

    return (
        <div className='w-64 h-screen overflow-y-auto p-3 sticky top-0'>

            {/* Main Nav */}
            <ul className='mb-4'>
                <Link to="/"><li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-gray-100 cursor-pointer font-medium'>🏠 <span>Home</span></li></Link>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-gray-100 cursor-pointer font-medium'>🎵 <span>Shorts</span></li>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-gray-100 cursor-pointer font-medium'>📺 <span>Subscriptions</span></li>
            </ul>

            <hr className='my-2'/>

            {/* You section */}
            <h2 className='px-3 py-1 text-sm font-semibold text-gray-600'>You</h2>
            <ul className='mb-4'>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-gray-100 cursor-pointer'>🕐 <span>History</span></li>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-gray-100 cursor-pointer'>▶️ <span>Your Videos</span></li>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-gray-100 cursor-pointer'>⏰ <span>Watch Later</span></li>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-gray-100 cursor-pointer'>👍 <span>Liked Videos</span></li>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-gray-100 cursor-pointer'>📋 <span>Playlists</span></li>
            </ul>

            <hr className='my-2'/>

            {/* Subscriptions */}
            <h2 className='px-3 py-1 text-sm font-semibold text-gray-600'>Subscriptions</h2>
            <ul className='mb-4'>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-gray-100 cursor-pointer'>🎮 <span>Gaming</span></li>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-gray-100 cursor-pointer'>🎵 <span>Music</span></li>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-gray-100 cursor-pointer'>⚽ <span>Sports</span></li>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-gray-100 cursor-pointer'>🎬 <span>Movies</span></li>
            </ul>

            <hr className='my-2'/>

            {/* Explore */}
            <h2 className='px-3 py-1 text-sm font-semibold text-gray-600'>Explore</h2>
            <ul className='mb-4'>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-gray-100 cursor-pointer'>🔥 <span>Trending</span></li>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-gray-100 cursor-pointer'>🛍️ <span>Shopping</span></li>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-gray-100 cursor-pointer'>🎵 <span>Music</span></li>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-gray-100 cursor-pointer'>🎬 <span>Films</span></li>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-gray-100 cursor-pointer'>📡 <span>Live</span></li>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-gray-100 cursor-pointer'>🎮 <span>Gaming</span></li>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-gray-100 cursor-pointer'>📰 <span>News</span></li>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-gray-100 cursor-pointer'>🏆 <span>Sports</span></li>
            </ul>

            <hr className='my-2'/>

            {/* Settings */}
            <ul className='mb-4'>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-gray-100 cursor-pointer'>⚙️ <span>Settings</span></li>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-gray-100 cursor-pointer'>🚩 <span>Report history</span></li>
                <li className='flex items-center gap-5 py-2 px-3 rounded-xl hover:bg-gray-100 cursor-pointer'>❓ <span>Help</span></li>
            </ul>

        </div>
    );
};
