import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { YOUTUBE_SEARCH_VIDEOS_API } from '../utils/constants';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search_query");
  const [searchedVideos, setSearchedVideos] = useState([]);

  useEffect(() => {
    getSearchedVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getSearchedVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_VIDEOS_API + searchQuery);
      const json = await data.json();
      setSearchedVideos(json?.items || []);
    } catch (error) {
      console.error(error);
      setSearchedVideos([]);
    }
  };

  return (
    <div className="flex flex-col p-4 w-full bg-[#0f0f0f] text-white">
      {searchedVideos?.map((video) => (
        <Link key={video?.id?.videoId} to={"/watch?v=" + video?.id?.videoId}>
          <div className="flex m-4 hover:bg-[#272727] p-2 rounded-xl cursor-pointer transition">
            <img
              className="rounded-xl w-80 h-44 object-cover flex-shrink-0"
              alt="thumbnail"
              src={video?.snippet?.thumbnails?.medium?.url}
            />
            <div className="px-4">
              <h1 className="font-bold text-lg text-white">{video?.snippet?.title}</h1>
              <p className="text-gray-400 text-sm py-1">{video?.snippet?.channelTitle}</p>
              <p className="text-gray-400 text-xs line-clamp-2">{video?.snippet?.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
