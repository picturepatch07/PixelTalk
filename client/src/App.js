import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LobbyScreen from "./pages/LobbyScreen";
import RoomPage from "./pages/Room";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
      </Routes>
    </div>
  );
};

export default App;
