import React from 'react'

const VideoCard = ({info}) => {
    const {snippet , statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;

    return (
        <div className='p-2 w-full text-white cursor-pointer'>
            <img className='rounded-xl w-full aspect-video object-cover' alt="thumbnail" src = {thumbnails?.medium?.url || thumbnails?.high?.url}/>
            <ul className="mt-2">
                <li className="font-semibold text-sm line-clamp-2 leading-snug">{title}</li>
                <li className="text-gray-400 text-xs mt-1">{channelTitle}</li>
                <li className="text-gray-400 text-xs">{Number(statistics?.viewCount || 0).toLocaleString()} views</li>
            </ul>
        </div>
    );
};

export default VideoCard;