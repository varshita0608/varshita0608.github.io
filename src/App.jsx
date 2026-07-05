import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

import Home from "./pages/Home";
import Albums from "./pages/Albums";
import Artists from "./pages/Artists";
import Genres from "./pages/Genres";
import NowPlaying from "./components/NowPlaying";
export default function App() {

  const { darkMode } = useContext(ThemeContext);

  return (

    <div className={darkMode ? "dark" : "light"}>

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/albums" element={<Albums />} />

          <Route path="/artists" element={<Artists />} />

          <Route path="/genres" element={<Genres />} />

        </Routes>

      </BrowserRouter>
      <NowPlaying />

    </div>

  );

}