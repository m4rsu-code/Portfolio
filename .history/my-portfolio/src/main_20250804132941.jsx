import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/CSS/index.css";
import App from "./App.jsx";
import AchievementsPage from "./AchievementsPage.jsx";
import ProjectPage from "./ProjectPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </Router>
  </StrictMode>
);