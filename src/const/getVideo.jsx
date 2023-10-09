const ENDPOINT = "https://www.googleapis.com/youtube/v3/videos";
const KEY = "AIzaSyC5x-igHvLk-8wxzv5vs9T7NUvE0328VfQ";
const id = "videoId"
const chart = "mostPopular"

let videoData = `${ENDPOINT}?key=${KEY}&part=snippet,statistics&chart=${chart}&id=${id}`

export default videoData;



// export function buildVideoDetailRequest(videoId) {
//    return buildApiRequest('GET',
//      '/youtube/v3/videos',
//      {
//        part: 'snippet,statistics,contentDetails',
//        id: videoId,
//        fields: 'kind,items(contentDetails/duration,id,snippet(channelId,channelTitle,description,publishedAt,thumbnails/medium,title),statistics)'
//      }, null);
//  }