// import clickbate from "../../assets/images/clickbate.jpg";
// import like from "../../assets/images/like.svg";
// import dislike from "../../assets/images/dislike.svg";
// import download from "../../assets/images/download.svg";
// import clip from "../../assets/images/clip.svg";
// import save from "../../assets/images/save.svg";
// import more from "../../assets/images/more.svg";
// import channelLogo from "../../assets/images/channel-logo.svg";
import mrb from "../../assets/mrbeast.jpg";


import "./VideoFull.scss";
import { NavLink } from "react-bootstrap";

const VideoFullCard = () => {
  return (
    <div className="video-full-card container-mb">
      <div className="card-image">
        <img className="card-img" src={mrb} alt="Clickbate" />
      </div>
      <div className="card-content">
        <h3 className="card-title text-white">
          Worlds Most Dangerous Trap!
        </h3>
        <div className="card-footer">
          <div className="card-stats">
            <p className="card-views">2,132,757 views</p>
            <p className="card-time">6 hours ago</p>
          </div>
          <div className="card-controls">
            <div className="button-wrapper">
              <button className="control-btn">
                <img src="" alt="like" />
              </button>
              <p className="btn-desc">21K</p>
            </div>
            <div className="button-wrapper">
              <button className="control-btn">
                <img src="" alt="dislike" />
              </button>
              <p className="btn-desc">Dislike</p>
            </div>
            <div className="button-wrapper download-box">
              <button className="control-btn">
                <img src="" alt="download" />
              </button>
              <p className="btn-desc">Download</p>
            </div>
            <div className="button-wrapper save-box">
              <button className="control-btn ">
                <img src="" alt="clip" />
              </button>
              <p className="btn-desc">Clip</p>
            </div>
            <div className="button-wrapper clip-box">
              <button className="control-btn">
                <img src="" alt="save" />
              </button>
              <p className="btn-desc">Save</p>
            </div>
            <div className="button-wrapper">
              <button className="control-btn">
                <img src="" alt="more" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-channel-info">
        <div className="card-channel-left">
          <button className="channel-btn">
            <img
              className="card-channel-img"
              src={mrb}
              alt="Channel Logo"
            />
          </button>
          <div className="channel-info">
            <NavLink className="channel-name">Mr Beast</NavLink>
            <p className="channel-subs">14.1M Subscriber</p>
          </div>
        </div>
        <div className="card-channel-right">
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default VideoFullCard;