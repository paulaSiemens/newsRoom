import React from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./MainContent.css";
import Parse from "parse";
import SubmitIdea from "../components/SubmitIdea";
import Selection from "../components/Selection";

function MainContent() {
  return (
    <main className="mainContent">
      <BrowserRouter>
        <Routes>
          <Route
            path="/submitIdea"
            element={
              Parse.User.current() ? <SubmitIdea /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/selection"
            element={
              Parse.User.current() ? <Selection /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default MainContent