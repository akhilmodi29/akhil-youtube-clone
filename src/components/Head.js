import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import {cacheResults} from "../utils/searchSlice"

const Head = () => {
  const urlQuery = new URLSearchParams(window.location.search).get("search_query") || "";
  const [searchQuery, setSearchQuery] = useState(urlQuery);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery] && searchCache[searchQuery].length > 0) {
        setSuggestions(searchCache[searchQuery]);  
      } else {
        getSearchSuggestions();
      }
    }, 200);
    
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    if (!searchQuery.trim()) return;

    try {
      const data = await fetch(YOUTUBE_SEARCH_API + encodeURIComponent(searchQuery));
      const json = await data.json();
      const results = json[1] || [];
      setSuggestions(results);

      if (results.length > 0) {
        dispatch(
          cacheResults({
            [searchQuery]: results,
          })
        );
      }
    } catch (err) {
      console.error("Search suggestion failed:", err);
      setSuggestions([]);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSuggestions(false);
      window.location.href = "/results?search_query=" + encodeURIComponent(searchQuery);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    window.location.href = "/results?search_query=" + encodeURIComponent(suggestion);
  };

  return (
    <div className="flex justify-between items-center px-6 py-2 sticky top-0 bg-[#0f0f0f] border-b border-[#272727] z-50 text-white">
      <div className="flex items-center gap-4">
        <img
          onClick={toggleMenuHandler}
          className="h-6 cursor-pointer invert"
          alt="menu"
          src="https://www.svgrepo.com/show/506800/burger-menu.svg"
        />
        <a href="/">
          <img
            className="h-5"
            alt="youtube-logo"
            src="https://tapesh-youtube-clone.vercel.app/assets/yt-logo-88Cu2YdM.png"
          />
        </a>
      </div>

      <div className="flex-1 flex justify-center relative px-6">
        <form onSubmit={handleSearch} className="flex w-full max-w-xl">
          <input
            className="w-full bg-[#121212] text-white border border-[#303030] p-2 pl-4 rounded-l-full outline-none focus:border-blue-500 placeholder-gray-400"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button type="submit" className="border border-l-0 border-[#303030] px-5 py-2 rounded-r-full bg-[#222222] text-white hover:bg-[#272727]">
            🔍︎
          </button>
        </form>

        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-11 bg-[#212121] py-2 px-2 w-full max-w-xl shadow-lg rounded-lg border border-[#303030] z-50 text-white">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  onMouseDown={() => handleSuggestionClick(s)}
                  className="flex items-center justify-between py-2 px-3 hover:bg-[#383838] cursor-pointer rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <span>🔍︎</span>
                    <span>{s}</span>
                  </div>
                  <span className="text-gray-400 text-sm">↗</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex items-center gap-6">
        <button title="Create" className="hover:opacity-75">
          <svg className="w-6 h-6 cursor-pointer text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="6" width="14" height="12" rx="2" />
            <path d="M16 10l4.553-2.276A1 1 0 0122 8.618v6.764a1 1 0 01-1.447.894L16 14v-4z" />
            <line x1="9" y1="9" x2="9" y2="15" />
            <line x1="6" y1="12" x2="12" y2="12" />
          </svg>
        </button>

        <button title="Notifications" className="hover:opacity-75">
          <svg className="w-6 h-6 cursor-pointer text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>

        <img
          className="h-8 w-8 rounded-full object-cover cursor-pointer"
          alt="user"
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60"
        />
      </div>
    </div>
  );
}

export default Head;