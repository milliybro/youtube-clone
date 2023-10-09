import "./layout.scss";
import "./Header.scss";
import menu from "../../assets/menu.svg";
import logo from "../../assets/logo.png";
import search from "../../assets/search.svg";
import mic from "../../assets/mic.png";
import create from "../../assets/videocreate.png";
import notification from "../../assets/noticifation.svg";
import milliybro from "../../assets/photo_2023-08-07_12-24-16.jpg";
// import {  useState } from "react";
// import useScreenSize from "../hooks/ScreenSize";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const Header = ({ sidebarOpen }) => {
    // const [searchShow, setSearchShow] = useState(false);
    // const screenSize = useScreenSize();
  return (
    <header>
      <div className="nav container-mb d-flex justify-content-between align-items-center py-2">
        <div className="logos d-flex align-items-center gap-1">
        <button
                  onClick={() => sidebarOpen()}
                  className="sidebar ms-2"
                >
          <img width={50} className="pe-4 menu" src={menu} alt="" />
                </button>
              
          <img width={40} src={logo} alt="" />
          <h5 className="logo">MilliyTube</h5>
        </div>
        <div className="nav-center">
          <div className="input d-flex gap-2">
            <input className="" type="text" placeholder="Search" />
            <button className="search">
              <img className="search-img" src={search} />
            </button>
          </div>
          <div className="mic">
            <img className="mic-img" width={23} height={25} src={mic} alt="" />
          </div>
        </div>
        <div className="d-flex gap-2">
          <div className="create">
            <img className="create-img" src={create} alt="" />
          </div>
          <div className="notification">
            <img className="notification-img" src={notification} alt="" />
          </div>
          <img className="milliybro" src={milliybro} alt="" />
        </div>
      </div>

      {/* <nav>
        <div className="container-fluid nav-container">
          {searchShow && screenSize <= 650 ? (
            <Fragment>
              <button
                onClick={() => setSearchShow(false)}
                className="back-btn mr-3"
              >
                <img src="" alt="Back" />
              </button>
              <div className="nav-search-click">
                <input
                  className="search-box"
                  placeholder="Search"
                  type="text"
                />
                <button title="Search" className="search-btn">
                  <img src="" alt="Search Icon" />
                </button>
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <div className="nav-left">
                <button
                  onClick={() => sidebarOpen()}
                  className="sidebar-control"
                >
                  <img src="" alt="Sidebar Menu" />
                </button>
                <Link to="/home" title="Youtube Home" className="youtube-logo">
                  <img src={logo} alt="Youtube Logo" />
                </Link>
              </div>
              <div className="nav-middle">
                <div className="nav-search">
                  <input
                    className="search-box"
                    placeholder="Search"
                    type="text"
                  />
                  <button title="Search" className="search-btn">
                    <img src="" alt="Search Icon" />
                  </button>
                </div>
                <button className="voice-btn">
                  <img src="" alt="Voice search" />
                </button>
              </div>
              <div className="nav-right">
                <button
                  onClick={() => setSearchShow(true)}
                  className="search-btn-res"
                >
                  <img src="" alt="Search" />
                </button>
                <button className="voice-btn-res">
                  <img src="" alt="Voice search" />
                </button>
                <button className="create-btn">
                  <img src="" alt="Create Content btn" />
                </button>
                <button className="notification-btn">
                  <img src={notification} alt="Notification" />
                </button>
                <button className="user-account">
                  <img src={milliybro} alt="User Image" />
                </button>
              </div>
            </Fragment>
          )}
        </div>
      </nav> */}
    </header>
  );
};


Header.propTypes = {
  sidebarOpen: PropTypes.func,
  setSearch: PropTypes.func,
  search: PropTypes.string,
};
export default Header;
