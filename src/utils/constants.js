const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const LIVE_CHAT_COUNT = 10;

export const YOUTUBE_VIDEOS_API = 
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" + GOOGLE_API_KEY;


export const YOUTUBE_SEARCH_API =
    "/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_VIDEOS_API = 
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=" + GOOGLE_API_KEY + "&q=";

export const YOUTUBE_VIDEO_DETAILS_API = 
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&key=" + GOOGLE_API_KEY + "&id=";