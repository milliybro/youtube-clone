const ENDPOINT = "https://www.googleapis.com/youtube/v3/search";
const KEY = "AIzaSyC5x-igHvLk-8wxzv5vs9T7NUvE0328VfQ";
const channelType = "any";
const results = 20;
const order = "title";

let searchURL = `${ENDPOINT}?key=${KEY}&channelType=${channelType}&maxResults=${results}&order=${order}`

export default searchURL;