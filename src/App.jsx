import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateBoard from "./components/CreateBoard.jsx";
import DialogLoaderContainer from "./components/DialogLoaderContainer.jsx";
import { default as FeedInfo } from "./components/FeedInfo.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  const Backend = isMobile ? TouchBackend : HTML5Backend;

  return (
    <div className="bg-zinc-800 text-xs text-gray-300 h-[100vh] md:text-md lg:text-lg">
      <DialogLoaderContainer />
      <DndProvider backend={Backend}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="home" element={<HomePage />}>
              <Route path="feed" element={<FeedInfo />} />
              <Route path="createBoard" element={<CreateBoard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DndProvider>
    </div>
  );
}

export default App;
