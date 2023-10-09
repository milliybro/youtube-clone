import { Tab, TabList, Tabs } from "react-tabs";

import "slick-carousel/slick/slick.css";
import "react-tabs/style/react-tabs.css";
import "./Tab.scss";

const HomeTab = () => {
  return (
    <Tabs>
      <TabList className="tabs-menu">
        <Tab className="tabs-item">All</Tab>
        <Tab className="tabs-item">Music</Tab>
        <Tab className="tabs-item">Dubbing</Tab>
        <Tab className="tabs-item">Television series</Tab>
        <Tab className="tabs-item">Mixes</Tab>
        <Tab className="tabs-item">Dramedy</Tab>
        <Tab className="tabs-item">Live</Tab>
        <Tab className="tabs-item">Mr.Bean</Tab>
        <Tab className="tabs-item">Jerry Mouse</Tab>
        <Tab className="tabs-item">Computer Programming</Tab>
        <Tab className="tabs-item">Playlists</Tab>
        <Tab className="tabs-item">House Music</Tab>



      </TabList>

    </Tabs>
  );
};

export default HomeTab;