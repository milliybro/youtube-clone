import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import DownloadsPage from "./pages/DownloadsPage";
import History from "./pages/History";
import HomePage from "./pages/HomePage";
import Library from "./pages/library";
import LikedPage from "./pages/LikedPage";
import ShortsPage from "./pages/ShortsPage";
import SubsPage from "./pages/SubsPage";
import VideoPage from "./pages/VideoPage";
import VideosPage from "./pages/VideosPage";
import WatchPage from "./pages/WatchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="shorts" element={<ShortsPage />} />
          <Route path="video/:id" element={<VideoPage />} />
          <Route path="subs" element={<SubsPage />} />
          <Route path="library" element={<Library />} />
          <Route path="history" element={<History />} />
          <Route path="videos" element={<VideosPage />} />
          <Route path="watch" element={<WatchPage />} />
          <Route path="downloads" element={<DownloadsPage />} />
          <Route path="liked" element={<LikedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
