import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams, Link } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { YOUTUBE_VIDEOS_API, YOUTUBE_VIDEO_DETAILS_API } from '../utils/constants';

export const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");
    const [suggestedVideos, setSuggestedVideos] = useState([]);
    const [videoDetails, setVideoDetails] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
        getSuggestedVideos();
        getVideoDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [videoId]);

    const getVideoDetails = async () => {
      try {
        const data = await fetch(YOUTUBE_VIDEO_DETAILS_API + videoId);
        const json = await data.json();
        setVideoDetails(json?.items?.[0] || null);
      } catch (err) {
        console.error(err);
      }
    };

    const getSuggestedVideos = async () => {
      try {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setSuggestedVideos(json?.items || []);
      } catch (err) {
        console.error(err);
        setSuggestedVideos([]);
      }
    };

   return (
    <div className="flex w-full px-8 py-5 gap-8 justify-center bg-[#0f0f0f] text-white min-h-screen">
      {/* Left Column: Video Player (Responsive 16:9) + Comments */}
      <div className="flex-1 max-w-[1100px]">
        <div className="w-full aspect-video">
          <iframe
            className="w-full h-full rounded-2xl"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Info Section */}
        <div className="py-4">
          <h1 className="text-xl font-bold text-white">
            {videoDetails?.snippet?.title}
          </h1>

          <div className="flex justify-between items-center mt-3">
            {/* Channel Info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg">
                {videoDetails?.snippet?.channelTitle?.charAt(0) || "Y"}
              </div>
              <div>
                <p className="font-bold text-base leading-tight text-white">
                  {videoDetails?.snippet?.channelTitle}
                </p>
                <p className="text-gray-400 text-xs">Subscribers</p>
              </div>
              <button className="bg-white text-black px-4 py-2 rounded-full font-medium text-sm ml-4 hover:bg-gray-200 transition">
                Subscribe
              </button>
            </div>

            {/* Likes & Views */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-[#272727] hover:bg-[#383838] px-4 py-2 rounded-full font-medium text-sm text-white transition">
                👍 {Number(videoDetails?.statistics?.likeCount || 0).toLocaleString()} Likes
              </button>
              <div className="bg-[#272727] px-4 py-2 rounded-full font-medium text-sm text-gray-300">
                👁️ {Number(videoDetails?.statistics?.viewCount || 0).toLocaleString()} Views
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-2">
          <CommentsContainer />
        </div>
      </div>

      {/* Right Column: Live Chat + Video Suggestions */}
      <div className="w-[420px] flex-shrink-0">
        <LiveChat />

        <div className="mt-6">
          <h2 className="font-bold text-lg mb-3 text-white">Suggested Videos</h2>
          {suggestedVideos?.map((video) => (
            <Link key={video.id} to={"/watch?v=" + video.id}>
              <div className="flex gap-3 mb-3 p-1.5 hover:bg-[#272727] rounded-xl cursor-pointer transition">
                <img
                  className="w-40 h-24 object-cover rounded-lg flex-shrink-0"
                  alt="thumbnail"
                  src={video?.snippet?.thumbnails?.medium?.url}
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-sm line-clamp-2 text-white">
                    {video?.snippet?.title}
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">
                    {video?.snippet?.channelTitle}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {video?.statistics?.viewCount ? Number(video?.statistics?.viewCount).toLocaleString() + " views" : ""}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WatchPage;
 