import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateBoard from "./components/CreateBoard.jsx";
import DialogLoaderContainer from "./components/DialogLoaderContainer.jsx";
import { default as FeedInfo } from "./components/FeedInfo.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

const App = () => {
  return (
    <div className="bg-black text-xs text-gray-300 h-[100vh] md:text-lg overflow-auto">
      <DialogLoaderContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="home" element={<HomePage />}>
            <Route path="feed" element={<FeedInfo />} />
            <Route path="createBoard" element={<CreateBoard />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
