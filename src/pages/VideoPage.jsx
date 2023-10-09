import axios from "axios";
import { useEffect, useState } from "react";
import HomeCard from "../components/card/HomeCard";
import VideoFullCard from "../components/card/VideoFullCard";
import videoData from "../const/getVideo";
import "./Video.scss";

const VideoPage = () => {
   const [data, setData] = useState([]);
  useEffect(() => {
    const getVideos = async () => {
      try {
        let {
          data: { items },
        } = await axios(videoData);
        setData(items);
      } catch (err) {
        console.log(err);
      }
    };
    getVideos();
  }, []);
  return (
    <section>
      <div className="container-fluid">
        <h1>Video Page</h1>
        <div className="video-main row">
          <div className="main-video col-8 mt-5">
            <VideoFullCard />
          </div>
          <div className="videos-row">
          {data.map((item) => (
            <HomeCard key={item.channelId} {...item} />
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPage;