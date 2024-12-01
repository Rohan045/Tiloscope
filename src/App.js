import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Grid from "./components/grid.jsx";
import HomePage from "./components/home.jsx";
import HomePageV1 from "./pages/homePage.jsx";

function App() {
  const backgroundColorList = [
    "bg-gradient-to-r from-purple-500 to-indigo-500 ",
    "bg-gradient-to-r from-blue-400 to-emerald-400 ",
    "bg-gradient-to-tr from-violet-500 to-orange-300 ",
    "bg-gradient-to-r from-cyan-500 to-teal-500 ",
    "bg-gradient-to-r from-yellow-200 to-green-500",
  ];

  const getbackground = () => {
    return backgroundColorList[
      Math.floor(Math.random() * backgroundColorList.length)
    ];
  };

  return (
    <div className={getbackground() + "text-xs md:text-md lg:text-lg"}>
      <BrowserRouter>
        <Routes>
          <Route path="/grid" element={<Grid />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/v1" element={<HomePageV1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
