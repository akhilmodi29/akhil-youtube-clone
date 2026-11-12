import React from 'react'

const VideoCard = ({info}) => {
    const {snippet , statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;

    return (
        <div className='p-2 w-full shadow-lg'>
            <img className='rounded-lg ' alt="thumbnail" src = {thumbnails.high.url}/>
            <ul>
                <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    );
};

export default VideoCard;