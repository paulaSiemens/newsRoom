import Header from "./components/bars/Header";
import Navbar from "./components/menues/sideMenu/Navbar";
import Footer from "./components/bars/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import SubmitIdea from "./pages/SubmitIdea";
import Unassigned from "./pages/Unassigned";
import Assigned from "./pages/Assigned";
import Submitted from "./pages/Submitted";
import Archived from "./pages/Archived";
import Employees from "./pages/Employees";
import Start from "./pages/Start";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Db from "./Db";

{/*FIXME: mainContainer double components */}

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={!Db.isLoggedIn() ? <Start /> : <Navigate to="/assigned" />}
          />
          <Route
            path="/signup"
            element={!Db.isLoggedIn() ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!Db.isLoggedIn() ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/submitIdea"
            element={
              Db.isLoggedIn() ? (
                <div className="mainContainer">
                  <Navbar />
                  <SubmitIdea />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/unassigned"
            element={
              Db.isLoggedIn() ? (
                <div className="mainContainer">
                  <Navbar />
                  <Unassigned />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/assigned"
            element={
              Db.isLoggedIn() ? (
                <div className="mainContainer">
                  <Navbar />
                  <Assigned />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/submitted"
            element={
              Db.isLoggedIn() ? (
                <div className="mainContainer">
                  <Navbar />
                  <Submitted />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/archived"
            element={
              Db.isLoggedIn() ? (
                <div className="mainContainer">
                  <Navbar />
                  <Archived />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/employees"
            element={
              Db.isLoggedIn() ? (
                <div className="mainContainer">
                  <Navbar />
                  <Employees />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    <Footer />
  </div>
  );
}

export default App;
