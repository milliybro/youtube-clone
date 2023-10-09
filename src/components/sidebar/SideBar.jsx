import PropTypes from "prop-types";

import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Fragment } from "react";

import menu from "../../assets/menu.svg";
import logo from "../../assets/logo.png";
import home from "../../assets/home.png";
import shorts from "../../assets/shorts.svg";
import subs from "../../assets/subs.svg";
import library from "../../assets/library.png";
import history from "../../assets/history.png";
import videos from "../../assets/videos.svg";
import watch from "../../assets/watch.png";
import downloads from "../../assets/downloads.png";
import like from "../../assets/like.png";
import najot from "../../assets/nt.jpg";
import ap from "../../assets/ap.jpg";
import azp from "../../assets/azp.jpg";


// import channelIcon from "../../assets/images/channel-icon.jpg";

import "./SideBar.scss";

const SideBar = ({ show, sidebarClose }) => {
  return (
    <Fragment>
      <Offcanvas show={show} onHide={sidebarClose}>
        <Offcanvas.Header>
          <Offcanvas.Title>
            <div className="sidebar-menu">
              <button onClick={sidebarClose} className="sidebar-close">
                <img width={28} src={menu} alt="Sidebar Menu" /> 
              </button>
              <Link to="/home" title="Youtube Home" className="sidebar-logo text-white">
                <img width={40} src={logo} alt="Youtube Logo" />
                MilliyTube
              </Link>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="sidebara">
          <div className="sidebar-top">
            <div className="sidebar-option">
              <button className="sidebar-option-btn">
                <img src={home} alt="Home Icon" />
                Home
              </button>
            </div>
            <div className="sidebar-option">
              <button className="sidebar-option-btn">
                <img src={shorts} alt="Explore Icon" />
                Shorts
              </button>
            </div>
            <div className="sidebar-option">
              <button className="sidebar-option-btn">
                <img src={subs} alt="Shorts Icon" />
                Subscriptions
              </button>
            </div>
          </div>
          <hr className="line"/>
          <div className="sidebar-middle">
            <div className="sidebar-option">
              <button className="sidebar-option-btn">
                <img src={library} alt="Library Icon" />
                Library
              </button>
            </div>
            <div className="sidebar-option">
              <button className="sidebar-option-btn">
                <img src={history} alt="History Icon" />
                History
              </button>
            </div>
            <div className="sidebar-option">
              <button className="sidebar-option-btn">
                <img src={videos} alt="Your-videos Icon" />
                Your videos
              </button>
            </div>
            <div className="sidebar-option">
              <button className="sidebar-option-btn">
                <img src={watch} alt="Watch-later Icon" />
                Watch Later
              </button>
            </div>
            <div className="sidebar-option">
              <button className="sidebar-option-btn">
                <img src={downloads} alt="Pop Icon" />
                Downloads
              </button>
            </div>
            <div className="sidebar-option">
              <button className="sidebar-option-btn">
                <img src={like} alt="Pop Icon" />
                Liked videos
              </button>
            </div>
          </div>
          <hr className="line"/>

          <div className="sidebar-bottom">
            <h3 className="subscriptions-text">SUBSCRIPTIONS</h3>
            <Link className="subscriptions-box">
              <img
                className="channel-img"
                src={najot}
                alt="Channel Icon"
              />
              Najot Talim
            </Link>
            <Link className="subscriptions-box">
              <img
                className="channel-img"
                src={ap}
                alt="Channel Icon"
              />
              ABDULAZIZ PROGRAMMER
            </Link>
            <Link className="subscriptions-box">
              <img
                className="channel-img"
                src={azp}
                alt="Channel Icon"
              />
             Azimjon Pulatov
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </Fragment>
  );
};

SideBar.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  sidebarClose: PropTypes.func,
  sidebarOpen: PropTypes.func,
};

export default SideBar;