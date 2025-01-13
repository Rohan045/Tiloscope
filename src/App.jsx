import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateBoard from "./components/CreateBoard.jsx";
import DialogLoaderContainer from "./components/DialogLoaderContainer.jsx";
import { default as FeedInfo } from "./components/FeedInfo.jsx";
import MyBoards from "./components/MyBoards.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ShareViewPage from "./pages/ShareViewPage.jsx";
import bckImg from './assets/App_bckImg.png'

const App = () => {
  return (
    <div className="bg-black text-md text-gray-300 h-[100vh] md:text-lg overflow-auto" style={{backgroundImage:"url('" + bckImg + "')", backgroundRepeat:"repeat"}}>
      <DialogLoaderContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="home" element={<HomePage />}>
            <Route path="feed" element={<FeedInfo />} />
            <Route path="createBoard" element={<CreateBoard />} />
            <Route path="boards" element={<MyBoards />} />
          </Route>
          <Route path="/shareView/:id" element={<ShareViewPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
