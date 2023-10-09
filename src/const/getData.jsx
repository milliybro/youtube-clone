const ENDPOINT = "https://www.googleapis.com/youtube/v3/videos"
const KEY = "AIzaSyC5x-igHvLk-8wxzv5vs9T7NUvE0328VfQ";
const chart = "mostPopular";
const results = 50;

let homeURL = `${ENDPOINT}?key=${KEY}&part=snippet,statistics&chart=${chart}&maxResults=${results}`;

export default homeURL;