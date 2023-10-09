import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import HomeTab from "../components/tabs/HomeTab";

import home from "../assets/home.png";
import shorts from "../assets/shorts.svg";
import subs from "../assets/subs.svg";
import library from "../assets/library.png";
import download from "../assets/downloads.png";

import "./Home.scss";
import HomeCard from "../components/card/HomeCard";
import homeURL from "../const/getData";


const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getVideos = async () => {
      try {
        let {
          data: { items },
        } = await axios(homeURL);
        setData(items);
      } catch (err) {
        console.log(err);
      }
    };
    getVideos();
  }, []);

  return (
    <div className="container-mb home-container">
      <div className="home-sidebar">
        <NavLink className="home-sidebar-item">
          <img src={home} alt="home" />
          Home
        </NavLink>
        <NavLink className="home-sidebar-item">
          <img src={shorts} alt="shorts" />
          Shorts
        </NavLink>
        <NavLink className="home-sidebar-item">
          <img src={subs} alt="Subs" />
          Subscriptions
        </NavLink>
        <NavLink className="home-sidebar-item">
          <img src={library} alt="library" />
          <p>Library</p>
        </NavLink>
        <NavLink className="home-sidebar-item">
          <img src={download} alt="download" />
          <p>Downloads</p>
        </NavLink>
      </div>
      <div className="home-main">
        <HomeTab />
        <div className="videos-row">
          {data.map((item) => (
            <HomeCard key={item.channelId} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;