import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import verified from "../../assets/vertificate.svg";
import "./HomeCard.scss";

const HomeCard = ({ statistics, snippet, id }) => {
  const postedTime = () => {
    const now = new Date();
    const hours = now.getHours();
    let publishedtime = snippet.publishedAt.split("T")[1];
    let publishedHour = publishedtime.split(":")[0];
    return hours - +publishedHour;
  };

  const {
    thumbnails: { standard },
  } = snippet;

  return (
    <Link to={`video/${id}`} className="video-card">
      <div className="video-image">
        <img className="video-img" src={standard.url} alt="" />
        
      </div>
      <div className="video-info">
        <div className="video-left">
          <img
            className="video-icon"
            src={snippet.thumbnails.medium.url}
            alt="Logo"
          />
        </div>
        <div className="video-right">
          <h3 className="video-title">{snippet.title}</h3>
          <p className="video-channel">
            {snippet.channelTitle}
            <span>
              <img className="channel-logo-img" src={verified} alt="Verified" />
            </span>
          </p>
          <div className="video-stats">
            <p className="video-views">{statistics.viewCount} Views</p>
            <p>•</p>
            <p className="video-hours">{postedTime()} hours ago</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

HomeCard.propTypes = {
   id: PropTypes.string,
  statistics: PropTypes.object,
  snippet: PropTypes.object,
  channelTitle: PropTypes.string,
  publishedAt: PropTypes.string,
  thumbnails: PropTypes.string,
  title: PropTypes.string,
  viewCount: PropTypes.string,
};

export default HomeCard;
