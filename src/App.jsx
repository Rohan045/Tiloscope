import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/home.jsx";
import GamePage from "./pages/gamePage.jsx";
import HomePageV1 from "./pages/homePage.jsx";
import Feed from "./pages/feed.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

function App() {
  const backgroundColorList = [
    "bg-gradient-to-r from-purple-500 to-indigo-500 ",
    "bg-gradient-to-r from-blue-400 to-emerald-400 ",
    "bg-gradient-to-tr from-violet-500 to-orange-300 ",
    "bg-gradient-to-r from-cyan-500 to-teal-500 ",
  ];
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  const Backend = isMobile ? TouchBackend : HTML5Backend;
  const getbackground = () => {
    return backgroundColorList[
      Math.floor(Math.random() * backgroundColorList.length)
    ];
  };

  return (
    <div className={getbackground() + "text-xs md:text-md lg:text-lg"}>
      <DndProvider backend={Backend}>
        <BrowserRouter>
          <Routes>
            <Route path="/game" element={<GamePage />} />
            <Route path="/v1" element={<HomePage />} />
            <Route path="/" element={<HomePageV1 />} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
        </BrowserRouter>
      </DndProvider>
    </div>
  );
}

export default App;
