import "./layout.scss";
import "./Header.scss";
import menu from "../../assets/menu.svg";
import logo from "../../assets/logo.png";
import searcha from "../../assets/search.svg";
import mic from "../../assets/mic.png";
import create from "../../assets/videocreate.png";
import notification from "../../assets/noticifation.svg";
import milliybro from "../../assets/photo_2023-08-07_12-24-16.jpg";
import PropTypes from "prop-types";

const Header = ({ sidebarOpen }) => {



  return (
    <header>
      <div className="nav container-mb d-flex justify-content-between align-items-center py-2">
        <div className="logos d-flex align-items-center gap-1">
          <button onClick={() => sidebarOpen()} className="sidebar ms-2">
            <img width={50} className="pe-4 menu" src={menu} alt="" />
          </button>

          <img width={40} src={logo} alt="" />
          <h5 className="logo">MilliyTube</h5>
        </div>
        <div className="nav-center">
          <div className="input d-flex gap-2">
            <input
              className=""
              type="text"
              placeholder="Search"
            />
            <button className="search">
              <img className="search-img" src={searcha} />
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
    </header>
  );
};

Header.propTypes = {
  sidebarOpen: PropTypes.func,
  setSearch: PropTypes.func,
};
export default Header;
