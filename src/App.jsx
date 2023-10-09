import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout"
import HomePage from "./pages/HomePage"
import VideoPage from "./pages/VideoPage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
    <Route path="" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route path="video/:id" element={<VideoPage />} />
    </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
